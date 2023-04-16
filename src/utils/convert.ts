import { fetchFile, type FFmpeg } from '@ffmpeg/ffmpeg';

export interface Options {
	crf?: number;
	outputName?: string;
	fps?: number;
}

const defaultOptions: Options = {
	crf: 23,
	outputName: 'compressed',
	fps: 30
};

export async function convert(
	ffmpeg: FFmpeg,
	videoFile: File,
	options = defaultOptions
): Promise<Blob> {
	const { crf, outputName, fps } = { ...defaultOptions, ...options };

	return new Promise((resolve) => {
		fetchFile(videoFile).then((file) => {
			ffmpeg.FS('writeFile', videoFile.name, file);
			ffmpeg
				.run(
					'-i',
					videoFile.name,
					'-c:v',
					'libx264',
					'-r',
					`${fps}`,
					'-preset',
					'medium',
					'-vf',
					'scale=1920:-1',
					'-crf',
					`${crf}`,
					`${outputName}.mp4`
				)
				.then(() => {
					const converted = ffmpeg.FS('readFile', `${outputName}.mp4`);
					const blob = new Blob([converted.buffer], { type: 'video/mp4' });
					ffmpeg.FS('unlink', `${outputName}.mp4`);
					resolve(blob);
				});
		});
	});
}

// import { json } from '@sveltejs/kit';
// import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

// export async function POST({ request, url, fetch }) {
// 	const ffmpeg = createFFmpeg({
// 		log: true,
// 		corePath: './node_modules/@ffmpeg/core/dist/ffmpeg-core.js'
// 	});

// 	const formData = await request.formData();
// 	const file: File | null = formData.get('file') as File;

// 	if (!file) {
// 		return json({ message: 'File not found.' });
// 	}

// 	const regex = new RegExp(/^video\/.*$/);
// 	const isValidFile = regex.test(file.type);

// 	if (!isValidFile) {
// 		return json({ message: 'File is not valid.' });
// 	}

// 	await ffmpeg.load();

// 	console.log(ffmpeg);
// 	const fetchedFile = await fetchFile(file);
// 	console.log(fetchedFile);

// 	// ffmpeg.FS('writeFile', file.name, );

// 	return new Response('Hello world');
// }

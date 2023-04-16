<script lang="ts">
	import { settings } from '$lib/state/settings';

	let crf: number = 23;
	let outputName: string = 'compressed';
	let fps: number = 60;

	$: {
		settings.set({
			crf,
			outputName,
			fps
		});
	}
</script>

<div class="wrapper">
	<label for="crf">CRF {crf}:</label>
	<input bind:value={crf} id="crf" type="range" min="0" max="51" />

	<label for="outputName">Video output name:</label>
	<input bind:value={outputName} id="outputName" type="text" placeholder="Video name" />

	<label for="fps">FPS {fps}:</label>
	<input bind:value={fps} id="fps" type="range" min="30" max="120" />
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: flex-start;
		align-items: start;
		gap: 1rem;
		flex-direction: column;
		margin: 1rem 0;
	}
</style>

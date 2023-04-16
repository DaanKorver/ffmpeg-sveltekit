<script lang="ts">
	import { createFFmpeg } from '@ffmpeg/ffmpeg';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { convert } from '../utils/convert';
	import Button from '$lib/components/Button.svelte';
	import FileInput from '$lib/components/FileInput.svelte';
	import Progress from '$lib/components/progress.svelte';
	import Logs from '$lib/components/Logs.svelte';
	import Settings from '$lib/components/Settings.svelte';
	import { settings } from '$lib/state/settings';

	const progress = tweened(0, {
		duration: 200
	});

	// Creating the FFMPEG WASM Module
	const ffmpeg = createFFmpeg({
		log: true,
		progress: (p) => {
			progress.set(p.ratio);
		}
	});

	// Logger
	let logs: string[] = [];
	ffmpeg.setLogger(({ type, message }) => {
		logs = [...logs, `[${type}] ${message}`];
	});

	// Loading FFMPEG
	onMount(async () => {
		await ffmpeg.load();
	});

	let fileInput: HTMLInputElement;
	let ready = false;
	let converting = false;
	let download = '';

	async function handleClick() {
		// Checking for files
		if (!fileInput) return;
		if (!fileInput.files) return;
		const video = fileInput.files[0];

		// Resetting the states
		progress.set(0);
		logs = [];
		download = '';

		// Start video transformation
		converting = true;
		const blob = await convert(ffmpeg, video, $settings);

		// Using the returned blob from ffmpeg to create download
		const url = URL.createObjectURL(blob);
		download = url;
		ready = true;
		converting = false;
	}
</script>

<h1>Video converter</h1>
<FileInput disabled={converting} bind:fileInput />
<Settings />
<Progress progress={$progress} />
<Logs {logs} />
<Button on:click={handleClick} disabled={converting}>
	{converting ? 'Transforming...' : 'Convert'}
</Button>

{#if ready}
	<a href={download} download={$settings.outputName || 'compressed'}>Download</a>
{/if}

<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let logs: string[];

	let logRef: HTMLDivElement;

	afterUpdate(() => {
		logRef.scrollTo(0, logRef.scrollHeight);
	});
</script>

<div bind:this={logRef}>
	{#each logs as log}
		<p>{log}</p>
	{/each}
</div>

<style>
	div {
		height: 30rem;
		width: 90%;
		max-width: 45rem;
		overflow: hidden;
		font-size: 0.7rem;
		border: 5px solid #000;
	}

	div > p:nth-child(odd) {
		background-color: #333;
	}

	div > p:nth-child(odd) {
		background-color: #555;
	}
</style>

<script lang="ts">
	export let progress: number = 0;
</script>

<div class="progress">
	<p>Progress: {Math.round(progress * 100)}%</p>
	<div class="bar" style="--progress: {progress}" />
</div>

<style>
	.progress {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		width: 90%;
		max-width: 30rem;
		column-gap: 1rem;
		margin: 2rem 0;
	}

	.progress p {
		margin: 0;
	}

	.bar {
		height: 8px;
		width: 100%;
		margin: 1rem 0;
		background-color: #eee;
		position: relative;
		border-radius: 999px;
		overflow: hidden;
	}

	.bar::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		transform: scaleX(calc(1 * var(--progress)));
		transform-origin: left center;
		transition: 0.05s transform ease-out;
		background-color: dodgerblue;
	}
</style>

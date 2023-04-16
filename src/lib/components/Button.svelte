<script lang="ts">
	export let variant: 'primary' | 'seconday' | 'unstyled' = 'primary';
</script>

<button on:click {...$$restProps} class="button {variant}"><slot /></button>

<style>
	button {
		min-width: 12rem;
		padding: 0.75rem 1rem;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

	button:disabled {
		filter: brightness(50%);
		cursor: progress;
	}

	.primary {
		background-color: dodgerblue;
		color: #fff;
	}
</style>

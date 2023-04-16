<script lang="ts">
	export let fileInput: HTMLInputElement;
</script>

<input {...$$restProps} type="file" bind:this={fileInput} />

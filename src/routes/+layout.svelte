<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
	/* Make sure there are no white margins on the top of the page */
	:global(body) {
		display: flex;
		flex-direction: column;
		margin: 0;
	}
	:global(*) {
		margin: 0;
	}
</style>

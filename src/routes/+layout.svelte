<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- The snippet below was copied from https://fonts.google.com/ -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children?.()}

<style>
	:global(html) {
		font-family: 'Maven Pro', sans-serif;
	}

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

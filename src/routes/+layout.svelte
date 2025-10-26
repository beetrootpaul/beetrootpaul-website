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
		href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children?.()}

<style>
	/* colors */
	:global(:root) {
		--dark-grey: #333333;
		--teal: #183042;
		--cherry: #c44169;
		--peach: #fca790;
		--beige: #fdcbb0;
		--white: #ffffff;
	}

	/* Make sure there are no white margins on the top of the page */
	:global(*) {
		margin: 0;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>

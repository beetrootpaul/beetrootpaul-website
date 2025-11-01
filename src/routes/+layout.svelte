<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="shortcut icon" href="favicon.png" />
	<link rel="shortcut icon" type="image/x-icon" href="logo_640x640.png" />

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

	:global(html) {
		height: 100%;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		background-color: var(--peach);
		color: var(--dark-grey);
		line-height: 1.25rem;
		font-family: 'Maven Pro', sans-serif;
		font-size: 1rem;
		font-weight: 400;
		letter-spacing: 0.125rem;

		/* Prevent bottom from disappearing on the page bottom. */
		&::after {
			display: table;
			content: ' ';
		}
	}

	/* Make sure there are no white margins on the top of the page */
	:global(*) {
		margin: 0;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>

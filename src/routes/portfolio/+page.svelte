<!--
# Attributions

## Fullscreen Lightbox Basic

- website: https://fslightbox.com/javascript
- creator: Piotr Zdziarski
- license: The MIT License
-->
<svelte:options runes={true} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { asset } from '$app/paths';
	import { DEBUG } from '$lib/debug';
	import { portfolioEntries } from '$lib/portfiolio_entries';
	import PortfolioEntryRow from './PortfolioEntryRow.svelte';

	onMount(() => {
		const fsLightboxScript = document.createElement('script');
		fsLightboxScript.src = asset(
			'/third_party/fslightbox-basic-3.7.4/fslightbox.js',
		);
		fsLightboxScript.onload = () => {
			console.log('Loaded: fslightbox');
		};
		document.head.appendChild(fsLightboxScript);
		return () => {
			document.head.removeChild(fsLightboxScript);
		};
	});
</script>

<svelte:head>
	<title>Beetroot Paul • Portfolio</title>
	<meta
		name="description"
		content="A portfolio of my artworks, including pixel art, chiptunes, and tiny video games."
	/>
	<meta name="theme-color" content="#fca790" />

	<meta property="og:title" content="Beetroot Paul • Portfolio" />
	<meta
		property="og:description"
		content="A portfolio of my artworks, including pixel art, chiptunes, and tiny video games."
	/>
	<meta property="og:type" content="website" />

	<meta property="twitter:title" content="Beetroot Paul • Portfolio" />
	<meta
		property="twitter:description"
		content="A portfolio of my artworks, including pixel art, chiptunes, and tiny video games."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="theme-color" content="#fca790" />
</svelte:head>

<header>
	<h1 style:color={DEBUG ? 'red' : ''}>Portfolio</h1>
	<a href="./" target="_blank">back to the home page</a>
</header>
<main role="list">
	{#each portfolioEntries.filter((entry) => entry.artwork.thumbnail !== 'TODO') as entry, artworkIndex}
		<PortfolioEntryRow {entry} {artworkIndex} />
	{/each}
</main>

<style lang="scss">
	:global(html) {
		height: 100%;
	}

	:global(body) {
		display: block;
		background-color: var(--teal);
	}

	header {
		margin-left: auto;
		margin-right: auto;
		max-width: 940px;
		padding: 0 0.5rem;

		@include bkp1 {
			max-width: 728px;
		}

		@include bkp2() {
			max-width: none;
		}

		h1 {
			margin-top: 20px;
			margin-bottom: 10px;
			color: var(--white);
			line-height: 44px;
			font-size: 3rem;
			font-weight: 400;
			text-shadow: -1px 2px 1px #000;

			@include bkp1 {
				font-size: 2.5rem;
			}

			@include bkp3() {
				margin-bottom: 8px;
				font-size: 2rem;
			}
		}

		a {
			margin-left: 0.2rem;
			color: var(--white);
			font-size: 0.8rem;

			@include bkp3() {
				font-size: 0.7rem;
			}
		}
	}

	/* fslightbos: Hide the "1 / 5" slide number. */
	:global(.fslightboxsn) {
		display: none !important;
	}
	/* fslightbos: Hide the fullscreen button. */
	:global(.fslightbox-toolbar > button[title='Enter fullscreen']) {
		display: none !important;
	}
	/* fslightbos: Crisp pixel art images. */
	:global(img.fslightbox-source) {
		image-rendering: pixelated;
	}
</style>

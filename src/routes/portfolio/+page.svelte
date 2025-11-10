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
	import {
		portfolioEntries,
		type PortfolioEntry,
	} from '$lib/portfiolio_entries';
	import ArtworkThumbnail from './ArtworkThumbnail.svelte';
	import { assetsBase } from './portfolio';

	const instagramLogo = '/brands/instagram-brands_c44169.svg';
	const itchLogo = '/brands/itch-io-brands_c44169.svg';
	const mastodonLogo = '/brands/mastodon-brands_c44169.svg';
	const xLogo = '/brands/x-brands_c44169.svg';
	const youtubeLogo = '/brands/youtube-brands_c44169.svg';

	const dateFinishedFormatter = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		year: 'numeric',
	});

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

{#snippet dataFinishedAndTypes(
	entry: PortfolioEntry,
	opts: { mobile: boolean },
)}
	<div class={opts.mobile ? 'mobile' : 'tablet-and-desktop'}>
		<div class="date-finished">
			{dateFinishedFormatter.format(entry.dateFinished)}
		</div>
		{@render typeEl(entry, 'oc', '💡 original creation')}
		{@render typeEl(entry, 'game', '👾 game')}
		{@render typeEl(entry, 'chiptune', '🔉 chiptune')}
		{@render typeEl(entry, 'animation', '▶️ animation')}
		{@render typeEl(entry, 'pixel_art', '🎨 pixel art')}
	</div>
{/snippet}

{#snippet typeEl(
	entry: PortfolioEntry,
	type: PortfolioEntry['type'][0],
	text: string,
)}
	{#if entry.type.includes(type)}
		<div class="type">{text}</div>
	{/if}
{/snippet}

{#snippet descriptionAndPublications(entry: PortfolioEntry)}
	<div class="details-rest-description-and-publications">
		<div class="description">
			{#each entry.descriptionParagraphs as paragraph}
				<p>
					{#each paragraph as { text, bold, linkUrl }}
						{#if linkUrl && bold}
							<strong><a href={linkUrl}>{text}</a></strong>
						{:else if linkUrl}
							<a href={linkUrl}>{text}</a>
						{:else if bold}
							<strong>{text}</strong>
						{:else}
							{text}
						{/if}
					{/each}
				</p>
			{/each}
		</div>
		<div class="publications">
			{@render publicationEl(entry.publications.itchUrl, itchLogo, 'itch.io')}
			{@render publicationEl(
				entry.publications.youtubeUrl,
				youtubeLogo,
				'YouTube',
			)}
			{@render publicationEl(entry.publications.xUrl, xLogo, 'X')}
			{@render publicationEl(
				entry.publications.instagramUrl,
				instagramLogo,
				'Instagram',
			)}
			{@render publicationEl(
				entry.publications.mastodonUrl,
				mastodonLogo,
				'Mastodon',
			)}
		</div>
	</div>
{/snippet}

{#snippet publicationEl(
	url: string | undefined,
	logo: string,
	nameForAlt: string,
)}
	{#if url}
		<a href={url} target="_blank">
			<img src={asset(logo)} alt="Link to the publication on {nameForAlt}" />
		</a>
	{/if}
{/snippet}

<header>
	<h1 style:color={DEBUG ? 'red' : ''}>Portfolio</h1>
	<a href="./" target="_blank">back to the home page</a>
</header>
<main role="list">
	{#each portfolioEntries.filter((entry) => entry.artwork.thumbnail !== 'TODO') as entry, artworkIndex}
		<section class="entry-container" role="listitem">
			<div class="artwork-and-mobile-finished-and-types">
				<ArtworkThumbnail {entry} />
				{@render dataFinishedAndTypes(entry, { mobile: true })}
			</div>
			<div class="artwork-info">
				<div class="details">
					<h1 class="details-title">{entry.title}</h1>
					<div class="details-rest">
						{@render dataFinishedAndTypes(entry, { mobile: false })}
						{@render descriptionAndPublications(entry)}
					</div>
				</div>
				{#if entry.progress.length > 0}
					<div class="progress">
						<div class="progress-heading">behind the scenes</div>
						<div class="progress-items">
							{#each entry.progress as item}
								<a
									data-fslightbox={`artwork-${artworkIndex}-progress`}
									href={asset(`${assetsBase}${item.big}`)}
								>
									<img
										src={asset(`${assetsBase}${item.big}`)}
										alt={item.alt ?? ''}
										data-testid="progress-thumbnail"
									/>
								</a>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</section>
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

	.tablet-and-desktop {
		display: block;

		@include bkp2() {
			display: none;
		}
	}

	.mobile {
		display: none;

		@include bkp2() {
			display: block;
		}
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

	.entry-container {
		display: flex;
		margin: 1rem auto;
		box-shadow: 0 0 16px #0000007d;
		border-radius: 0.25rem;
		max-width: 60rem;
		min-height: 23rem;
		background-color: var(--peach);
		padding: 1rem;
		flex-direction: row;
		justify-content: space-between;
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;

		@include bkp1 {
			max-width: 95vw;
		}

		@include bkp2() {
			border-radius: 0;
			min-height: auto;
			max-width: 100vw;
			flex-direction: column;
		}

		@include bkp3() {
			margin-top: 0.5rem;
			margin-bottom: 0.5rem;
			padding: 0.25rem;
			gap: 0.5rem;
		}

		&:nth-child(even) {
			flex-direction: row-reverse;

			@include bkp2() {
				flex-direction: column;
			}
		}
	}

	.artwork-and-mobile-finished-and-types {
		display: flex;
		flex-direction: row;
		gap: 1rem;

		@include bkp3 {
			gap: 0.5rem;
		}
	}

	.artwork-info {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
	}

	.details {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.details-title {
		color: var(--dark-grey);
		margin-top: -0.4rem;
		margin-bottom: 1rem;
		line-height: 44px;
		font-size: 2rem;
		font-weight: 400;

		@include bkp1 {
			line-height: 32px;
			font-size: 1.5rem;
		}

		@include bkp3 {
			margin-top: 0.25rem;
			margin-bottom: 0.5rem;
			font-size: 1rem;
		}
	}

	.details-rest {
		display: flex;
		justify-content: space-between;
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;

		@include bkp1 {
			grid-column-gap: 0.8rem;
			grid-row-gap: 0.8rem;
		}
	}

	.date-finished {
		margin-bottom: 1rem;
		font-size: 1rem;

		@include bkp1 {
			font-size: 0.8rem;
		}

		@include bkp3 {
			margin-bottom: 0.25rem;
			font-size: 0.7rem;
		}
	}

	.type {
		font-size: 0.8rem;

		@include bkp1 {
			font-size: 0.7rem;
		}

		@include bkp3 {
			line-height: 16px;
			font-size: 0.6rem;
		}
	}

	.details-rest-description-and-publications {
		flex: 1;
	}

	.description {
		font-size: 1rem;

		@include bkp1 {
			font-size: 0.8rem;
		}

		@include bkp3 {
			font-size: 0.7rem;
		}

		/* Prevent margins from collapsing with sibling elements. */
		&::before,
		&::after {
			display: table;
			content: ' ';
		}

		p {
			margin: 0 0 10px;
		}

		a {
			color: var(--dark-grey);
			text-decoration: underline;
		}
	}

	.publications {
		display: flex;
		margin-top: 0.6rem;
		grid-column-gap: 0.4rem;
		grid-row-gap: 0.4rem;

		img {
			width: 1.6rem;
			height: 1.6rem;

			@include bkp1 {
				width: 1.4rem;
				height: 1.4rem;
			}

			@include bkp3() {
				width: 1.3rem;
				height: 1.3rem;
			}

			&:hover {
				transform: scale(1.1);
			}
		}
	}

	.progress {
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		.entry-container:nth-child(even) & {
			align-items: flex-start;

			@include bkp2() {
				align-items: flex-end;
			}
		}
	}

	.progress-heading {
		margin-bottom: 0.5rem;
		color: var(--dark-grey);
		line-height: 20px;
		font-size: 0.8rem;
		font-weight: 400;

		@include bkp1 {
			font-size: 0.7rem;
		}

		@include bkp3 {
			margin-bottom: 0.125rem;
			font-size: 0.6rem;
		}
	}

	.progress-items {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 0.2rem;

		a {
			max-width: 4rem;
			height: 4rem;

			@include bkp1 {
				max-width: 3rem;
				height: 3rem;
			}

			@include bkp3 {
				max-width: 2.5rem;
				height: 2.5rem;
			}

			&:hover {
				transform: scale(1.1);
			}
		}

		img {
			display: block;
			max-width: 100%;
			max-height: 100%;
			object-fit: contain;
			// We intentionally don't set it to `pixelated` as those tiny images look
			// even worse that way.
			image-rendering: auto;
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

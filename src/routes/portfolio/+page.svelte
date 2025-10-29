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

	const assetsBase = '/portfolio/';
	const instagramLogo = '/brands/instagram-brands-inverted_c44169.svg';
	const itchLogo = '/brands/itch-io-brands_c44169.svg';
	const mastodonLogo = '/brands/mastodon-brands_c44169.svg';
	// TODO: Use X logo instead
	const twitterLogo = '/brands/twitter-brands_c44169.svg';
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

<!-- TODO: extract some sub-components -->

<header>
	<h1 style:color={DEBUG ? 'red' : ''}>Portfolio</h1>
	<!-- TODO: fix the home page URL for sub-path deployment -->
	<a href="/" target="_blank">back to the home page</a>
</header>
<main role="list">
	{#each portfolioEntries.filter((entry) => entry.artwork.thumbnail !== 'TODO') as entry, artworkIndex}
		<section class="entry-container" role="listitem">
			<!-- TODO: use some kind of a template? -->
			{#if 'youtubeUrl' in entry.artwork}
				<a
					class="artwork-thumbnail-container"
					data-fslightbox="artwork"
					href={entry.artwork.youtubeUrl}
				>
					<img src={asset(`${assetsBase}${entry.artwork.thumbnail}`)} alt="" />
					<div class="click-to-play-overlay">
						<p>click to play<br />with sound</p>
					</div>
				</a>
			{:else}
				<a
					class="artwork-thumbnail-container"
					data-fslightbox="artwork"
					href={asset(`${assetsBase}${entry.artwork.big}`)}
				>
					<img
						class="artwork-thumbnail"
						src={asset(`${assetsBase}${entry.artwork.thumbnail}`)}
						alt=""
					/>
				</a>
			{/if}
			<div class="artwork-info">
				<div class="details">
					<h1 class="details-title">{entry.title}</h1>
					<div class="details-rest">
						<div>
							<div class="date-finished">
								{dateFinishedFormatter.format(entry.dateFinished)}
							</div>
							<!-- TODO: use some kind of a template? -->
							{#if entry.type.includes('original_creation')}
								<div class="type">💡 original creation</div>
							{/if}
							{#if entry.type.includes('game')}
								<div class="type">👾 game</div>
							{/if}
							{#if entry.type.includes('chiptune')}
								<div class="type">🔉 chiptune</div>
							{/if}
							{#if entry.type.includes('animation')}
								<div class="type">▶️ animation</div>
							{/if}
							{#if entry.type.includes('pixel_art')}
								<div class="type">🎨 pixel art</div>
							{/if}
						</div>
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
								<!-- TODO: use some kind of a template? -->
								{#if entry.publications.itchUrl}
									<a href={entry.publications.itchUrl} target="_blank">
										<img
											src={asset(itchLogo)}
											alt="Link to the publication on itch.io"
										/>
									</a>
								{/if}
								{#if entry.publications.youtubeUrl}
									<a href={entry.publications.youtubeUrl} target="_blank">
										<img
											src={asset(youtubeLogo)}
											alt="Link to the publication on YouTube"
										/>
									</a>
								{/if}
								{#if entry.publications.xUrl}
									<a href={entry.publications.xUrl} target="_blank">
										<img
											src={asset(twitterLogo)}
											alt="Link to the publication on X"
										/>
									</a>
								{/if}
								{#if entry.publications.instagramUrl}
									<a href={entry.publications.instagramUrl} target="_blank">
										<img
											src={asset(instagramLogo)}
											alt="Link to the publication on Instagram"
										/>
									</a>
								{/if}
								{#if entry.publications.mastodonUrl}
									<a href={entry.publications.mastodonUrl} target="_blank">
										<img
											src={asset(mastodonLogo)}
											alt="Link to the publication on Mastodon"
										/>
									</a>
								{/if}
							</div>
						</div>
					</div>
				</div>
				{#if entry.progress.length > 0}
					<div class="progress">
						<div class="progress-heading">behind the scenes</div>
						<div class="progress-items">
							<!-- TODO: Define "alt" for each progress item. -->
							{#each entry.progress as item}
								<a
									data-fslightbox={`artwork-${artworkIndex}-progress`}
									href={asset(`${assetsBase}${item.big}`)}
								>
									<img src={asset(`${assetsBase}${item.big}`)} alt="" />
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
	// Helper for defining styles for a screen width of a portrait tablet and below.
	@mixin bkp1 {
		@media screen and (max-width: 991px) {
			@content;
		}
	}
	// Helper for defining styles for a screen width of a landscape mobile and below.
	@mixin bkp2 {
		@media screen and (max-width: 767px) {
			@content;
		}
	}

	:global(html) {
		height: 100%;
	}

	:global(body) {
		display: block;
		background-color: var(--teal);
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
		}

		a {
			margin-left: 0.2rem;
			color: var(--white);
			font-size: 0.8rem;
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
			max-width: 100vw;
			flex-direction: column;
		}

		&:nth-child(even) {
			flex-direction: row-reverse;

			@include bkp2() {
				flex-direction: column;
			}
		}
	}

	.artwork-thumbnail-container {
		position: relative;
		box-shadow: 0 0 11px 7px #0003;
		border-radius: 0.25rem;
		width: 21rem;
		height: fit-content;

		@include bkp1 {
			width: 16rem;
		}

		@include bkp2() {
			width: 15rem;
		}

		&:hover {
			transform: scale(1.05);
		}

		img {
			display: block;
			width: 100%;
			object-fit: contain;
			image-rendering: pixelated;
		}
	}

	.click-to-play-overlay {
		position: absolute;
		inset: 0% auto auto 0%;
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		place-items: center;

		p {
			border-radius: 0.4rem;
			background-color: color-mix(in srgb, var(--dark-grey), transparent 32%);
			padding: 0.2rem 0.6rem 0.3rem;
			color: var(--white);
			font-size: 1rem;
			text-align: center;
			text-shadow: -1px 1px 1px #183042;

			@include bkp1 {
				font-size: 0.9rem;
			}

			@include bkp2() {
				font-size: 0.8rem;
			}
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

		.date-finished {
			margin-bottom: 1rem;
			font-size: 1rem;

			@include bkp1 {
				font-size: 0.8rem;
			}
		}

		.type {
			font-size: 0.8rem;

			@include bkp1 {
				font-size: 0.7rem;
			}
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
	}

	.progress-items {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 0.2rem;

		a {
			max-width: 4rem;
			max-height: 4rem;

			@include bkp1 {
				max-width: 3rem;
				max-height: 3rem;
			}

			&:hover {
				transform: scale(1.1);
			}
		}

		img {
			display: block;
			width: 100%;
			object-fit: contain;
			image-rendering: pixelated;
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
</style>

<svelte:options runes={true} />

<script lang="ts">
	import { asset } from '$app/paths';
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
</script>

<header>
	<h1>Portfolio</h1>
	<a href="/" target="_blank">back to the home page</a>
</header>
<main role="list">
	{#each portfolioEntries as entry}
		<section class="entry-container" role="listitem">
			<img
				class="artwork-thumbnail"
				src={asset(
					`${assetsBase}${entry.artwork.thumbnail ?? entry.artwork.big}`,
				)}
				alt=""
			/>
			<div class="artwork-info">
				<div class="details">
					<h1 class="details-title">{entry.title}</h1>
					<div class="details-rest">
						<div>
							<div class="date-finished">
								{dateFinishedFormatter.format(entry.dateFinished)}
							</div>
							<!-- TODO: introduce a template -->
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
								<!-- TODO: introduce a template -->
								<!-- TODO: other types, in a proper order -->
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
				<div class="progress">
					<div class="progress-heading">behind the scenes</div>
					<div class="progress-items">
						<!-- TODO: Define "alt" for each progress item. -->
						{#each entry.progress as item}
							<img
								src={asset(`${assetsBase}${item.thumbnail ?? item.big}`)}
								alt=""
							/>
						{/each}
					</div>
				</div>
			</div>
		</section>
	{/each}
</main>

<style>
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
	}

	header {
		margin-left: auto;
		margin-right: auto;
		max-width: 940px;
		padding: 0 0.5rem;

		h1 {
			margin-top: 20px;
			margin-bottom: 10px;
			color: var(--white);
			line-height: 44px;
			font-size: 3rem;
			font-weight: 400;
			text-shadow: -1px 2px 1px #000;
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

		&:nth-child(even) {
			flex-direction: row-reverse;
		}
	}

	.artwork-thumbnail {
		border-radius: 0.25rem;
		width: 21rem;
		height: 21rem;
		object-fit: contain;
		box-shadow: 0 0 11px 7px #0003;
		/* TODO: Needed? */
		/* position: static; */
		/* width: 100%; */

		&:hover {
			transform: scale(1.05);
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
		/* TODO: Needed? */
		/* align-items: stretch; */
		/* min-width: 22rem; */
		/* height: 100%; */
	}

	.details-title {
		color: var(--dark-grey);
		margin-top: -0.4rem;
		margin-bottom: 1rem;
		line-height: 44px;
		font-size: 2rem;
		font-weight: 400;
	}

	.details-rest {
		display: flex;
		justify-content: space-between;
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;

		.date-finished {
			margin-bottom: 1rem;
		}

		.type {
			font-size: 0.8rem;
		}
	}

	.details-rest-description-and-publications {
		flex: 1;
	}

	.description {
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
		}
	}

	.progress {
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		.entry-container:nth-child(even) & {
			align-items: flex-start;
		}
	}

	.progress-heading {
		margin-bottom: 0.5rem;
		color: #333;
		line-height: 20px;
		font-size: 0.8rem;
		font-weight: 400;
	}

	.progress-items {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 0.2rem;

		img {
			object-fit: contain;
			max-width: 4rem;
			max-height: 4rem;

			&:hover {
				transform: scale(1.1);
			}
		}
	}
</style>

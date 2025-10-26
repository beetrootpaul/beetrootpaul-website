<svelte:options runes={true} />

<script lang="ts">
	import { asset } from '$app/paths';
	import { portfolioEntries } from '$lib/portfiolio_entries';

	const assetsBase = '/portfolio/';
</script>

<header>
	<h1>Portfolio</h1>
	<a href="/" target="_blank">back to the home page</a>
</header>
<main role="list">
	{#each portfolioEntries as entry}
		<section class="entry-container" role="listitem">
			<img
				src={asset(
					`${assetsBase}${entry.artwork.thumbnail ?? entry.artwork.big}`,
				)}
				alt=""
			/>
			<div class="entry-info">
				<div class="entry-info-main">
					<h1>{entry.title}</h1>
					<div class="entry-info-main-details">
						<div>
							<!-- TODO: format date -->
							<div>{entry.dateFinished}</div>
							<!-- TODO: other types, in a proper order -->
							{#if entry.type.includes('original_creation')}
								<div>💡 original creation</div>
							{/if}
							{#if entry.type.includes('game')}
								<div>👾 game</div>
							{/if}
							{#if entry.type.includes('chiptune')}
								<div>🔉 chiptune</div>
							{/if}
							{#if entry.type.includes('pixel_art')}
								<div>🎨 pixel art</div>
							{/if}
						</div>
						<div>
							<!-- TODO: description -->
							{JSON.stringify(entry.descriptionSegments)}
							<!-- TODO: publications -->
							{JSON.stringify(entry.publications)}
						</div>
					</div>
				</div>
				<div class="entry-info-progress">
					<div class="entry-info-progress-heading">behind the scenes</div>
					<div class="entry-info-progress-items">
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
		height: 23rem;
		background-color: var(--peach);
		padding: 1rem;
		flex-direction: row;
		justify-content: space-between;
		/* TODO: Needed? */
		/* grid-column-gap: 1rem; */
		/* grid-row-gap: 1rem; */

		img {
			border-radius: 0.25rem;
			object-fit: contain;
			box-shadow: 0 0 11px 7px #0003;
			/* TODO: Needed? */
			/* position: static; */
			/* width: 100%; */
		}
	}

	.entry-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* TODO: Needed? */
		/* flex: 1; */
	}

	.entry-info-main {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		/* TODO: Needed? */
		/* align-items: stretch; */
		/* min-width: 22rem; */
		/* height: 100%; */

		h1 {
			color: var(--dark-grey);
			margin-top: -0.4rem;
			margin-bottom: 1rem;
			line-height: 44px;
			font-size: 2rem;
			font-weight: 400;
		}

		.entry-info-main-details {
			display: flex;
			justify-content: space-between;
		}
	}

	.entry-info-progress {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.entry-info-progress-heading {
		margin-bottom: 0.5rem;
		color: #333;
		line-height: 20px;
		font-size: 0.8rem;
		font-weight: 400;
	}

	.entry-info-progress-items {
		img {
			object-fit: contain;
			max-width: 4rem;
			max-height: 4rem;
		}
	}
</style>

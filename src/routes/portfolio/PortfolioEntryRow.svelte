<script lang="ts">
	import type { PortfolioEntry } from '$lib/portfiolio_entries';
	import ArtworkDateFinishedAndTypes from './ArtworkDateFinishedAndTypes.svelte';
	import ArtworkDescription from './ArtworkDescription.svelte';
	import ArtworkProgress from './ArtworkProgress.svelte';
	import ArtworkPublications from './ArtworkPublications.svelte';
	import ArtworkThumbnail from './ArtworkThumbnail.svelte';

	const {
		entry,
		artworkIndex,
	}: { entry: PortfolioEntry; artworkIndex: number } = $props();
</script>

<section class="entry-container" role="listitem">
	<div class="artwork-and-mobile-finished-and-types">
		<ArtworkThumbnail {entry} />
		<ArtworkDateFinishedAndTypes {entry} mobile />
	</div>
	<div class="artwork-info">
		<div class="details">
			<h1 class="details-title">{entry.title}</h1>
			<div class="details-rest">
				<ArtworkDateFinishedAndTypes {entry} />
				<div style:flex={1}>
					<ArtworkDescription
						descriptionParagraphs={entry.descriptionParagraphs}
					/>
					<ArtworkPublications publications={entry.publications} />
				</div>
			</div>
		</div>
		<ArtworkProgress progress={entry.progress} {artworkIndex} />
	</div>
</section>

<style lang="scss">
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
</style>

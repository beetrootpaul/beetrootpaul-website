<script lang="ts">
	import { asset } from '$app/paths';
	import type { PortfolioEntry } from '$lib/portfiolio_entries';
	import { assetsBase } from './portfolio';

	const { entry }: { entry: PortfolioEntry } = $props();
</script>

{#if 'youtubeUrl' in entry.artwork}
	<a
		class="artwork-thumbnail-container"
		data-fslightbox="artwork"
		href={entry.artwork.youtubeUrl}
	>
		<img
			src={asset(`${assetsBase}${entry.artwork.thumbnail}`)}
			alt=""
			data-testid="artwork-thumbnail"
		/>
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
			src={asset(`${assetsBase}${entry.artwork.thumbnail}`)}
			alt=""
			data-testid="artwork-thumbnail"
		/>
	</a>
{/if}

<style lang="scss">
	.artwork-thumbnail-container {
		position: relative;
		box-shadow: 0 0 11px 7px #0003;
		border-radius: 0.25rem;
		width: 21rem;
		height: fit-content;
		overflow: hidden;

		@include bkp1 {
			width: 16rem;
		}

		@include bkp2() {
			width: 15rem;
		}

		@include bkp3() {
			width: 8rem;
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
</style>

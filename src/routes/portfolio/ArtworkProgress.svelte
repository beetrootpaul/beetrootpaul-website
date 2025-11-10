<script lang="ts">
	import { asset } from '$app/paths';
	import type { PortfolioEntry } from '$lib/portfiolio_entries';
	import { assetsBase } from './portfolio';

	const {
		progress,
		artworkIndex,
	}: { progress: PortfolioEntry['progress']; artworkIndex: number } = $props();
</script>

{#if progress.length > 0}
	<div class="progress" class:odd={artworkIndex % 2 === 1}>
		<div class="progress-heading">behind the scenes</div>
		<div class="progress-items">
			{#each progress as item}
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

<style lang="scss">
	.progress {
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		&.odd {
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
</style>

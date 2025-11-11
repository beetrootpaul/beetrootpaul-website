<script lang="ts">
	import type { PortfolioEntry } from '$lib/portfiolio_entries';

	const {
		entry,
		mobile = false,
	}: {
		entry: PortfolioEntry;
		mobile?: boolean;
	} = $props();

	const dateFormatter = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		year: 'numeric',
	});
</script>

{#snippet typeEl(
	entry: PortfolioEntry,
	type: PortfolioEntry['type'][0],
	text: string,
)}
	{#if entry.type.includes(type)}
		<div class="type">{text}</div>
	{/if}
{/snippet}

<div class={mobile ? 'mobile' : 'tablet-and-desktop'}>
	<div class="date-finished">
		{dateFormatter.format(entry.dateFinished)}
	</div>
	{@render typeEl(entry, 'oc', '💡 original creation')}
	{@render typeEl(entry, 'game', '👾 game')}
	{@render typeEl(entry, 'chiptune', '🔉 chiptune')}
	{@render typeEl(entry, 'animation', '▶️ animation')}
	{@render typeEl(entry, 'pixel_art', '🎨 pixel art')}
</div>

<style lang="scss">
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
</style>

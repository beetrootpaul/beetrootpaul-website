<script lang="ts">
	import type { PortfolioEntry } from '$lib/portfiolio_entries';

	const {
		descriptionParagraphs,
	}: { descriptionParagraphs: PortfolioEntry['descriptionParagraphs'] } =
		$props();
</script>

<div class="description">
	{#each descriptionParagraphs as paragraph}
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

<style lang="scss">
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
</style>

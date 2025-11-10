<script lang="ts">
	import { asset } from '$app/paths';
	import type { PortfolioEntry } from '$lib/portfiolio_entries';

	const { publications }: { publications: PortfolioEntry['publications'] } =
		$props();

	const instagramLogo = '/brands/instagram-brands_c44169.svg';
	const itchLogo = '/brands/itch-io-brands_c44169.svg';
	const mastodonLogo = '/brands/mastodon-brands_c44169.svg';
	const xLogo = '/brands/x-brands_c44169.svg';
	const youtubeLogo = '/brands/youtube-brands_c44169.svg';
</script>

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

<div class="publications">
	{@render publicationEl(publications.itchUrl, itchLogo, 'itch.io')}
	{@render publicationEl(publications.youtubeUrl, youtubeLogo, 'YouTube')}
	{@render publicationEl(publications.xUrl, xLogo, 'X')}
	{@render publicationEl(publications.instagramUrl, instagramLogo, 'Instagram')}
	{@render publicationEl(publications.mastodonUrl, mastodonLogo, 'Mastodon')}
</div>

<style lang="scss">
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
</style>

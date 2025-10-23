<svelte:options runes={true} />

<script lang="ts">
	import { artworks } from '$lib/artworks';
</script>

<header>
	<h1>Portfolio</h1>
	<a href="/">back to the home page</a>
</header>
<main role="list">
	{#each artworks as artwork}
		<div role="listitem">
			<h1>{artwork.title}</h1>
			<div>behind the scenes</div>
		</div>
	{/each}
</main>

<style>
	:global(body) {
		background-color: var(--teal);
	}
</style>

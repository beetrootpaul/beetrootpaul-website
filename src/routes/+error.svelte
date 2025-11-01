<script lang="ts">
	import { page } from '$app/state';
</script>

<main>
	{#if page.status === 404}
		<h1>Page not found</h1>
	{:else}
		<h1>{page.status}: {page.error?.message ?? '???'}</h1>
	{/if}
	<a href="/">Click here to go to the home page instead</a>
</main>

<style>
	main {
		display: flex;
		height: 100vh;
		width: 100vw;
		flex-direction: column;
		justify-content: center;
		place-items: center;
	}

	h1 {
		margin-bottom: 2rem;
		text-align: center;
		font-size: 1.5rem;
	}

	a {
		color: var(--dark-grey);
		text-align: center;
		text-decoration: underline;
	}
</style>

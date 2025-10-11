<script>
	import { links } from '$lib/links.ts';
</script>

<div class="container">
	<div class="card">
		<h1>beetrootpaul</h1>
		<h2>pixel art<br />chiptune<br />game dev</h2>
		<div class="links">
			{#each links as link}
				<a
					class={['link', { 'with-icon': link.icon }]}
					href={link.href}
					target="_blank"
				>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	/* colors */
	:global(:root) {
		--teal: #183042;
		--cherry: #c44169;
		--peach: #fca790;
		--beige: #fdcbb0;
	}

	.container {
		width: 100vw;
		height: 100vh;
		background-color: var(--peach);
	}

	.card {
		margin: 2rem auto;
		border-radius: 0.25rem;
		width: 24rem;
		background-color: var(--teal);
	}

	.links {
		display: flex;
		flex-direction: column;
		padding: 8px 8px 16px;
	}

	.link {
		margin: 8px;
		border-radius: 0.25rem;
		padding: 12px 24px;
		color: var(--cherry);
		background-color: var(--beige);
		font-size: 20px;
		font-weight: 600;
		text-decoration: none;

		&:not(.with-icon) {
			text-align: center;
		}
	}
</style>

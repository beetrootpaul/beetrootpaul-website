<script>
	import { asset } from '$app/paths';
	import { links } from '$lib/links.ts';

	const haderBgImage = '/136_Winter_Cottage_-_without_watermark__x2_.png';
	const logoImage = '/logo_640x640.png';
</script>

<div class="container">
	<div class="card">
		<div
			class="header-bg"
			style="background-image: url({asset(haderBgImage)}); color: red"
		></div>
		<div class="header-content">
			<img src={logoImage} alt="logo" />
			<h1>beetrootpaul</h1>
			<h2 class="header-content-subtitle">
				pixel art<br />chiptune<br />game dev
			</h2>
		</div>
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
		--white: #ffffff;
	}

	.container {
		width: 100vw;
		height: 100vh;
		background-color: var(--peach);
	}

	.card {
		position: relative;
		display: flex;
		margin: 2rem auto;
		box-shadow: 0 0 16px #0000007d;
		border-radius: 0.25rem;
		width: 24rem;
		background-color: var(--teal);
		flex-direction: column;
		place-items: stretch;
	}

	.header-bg {
		width: 100%;
		height: 24rem;
		background-size: cover;
		background-position: 50%;
	}

	.header-content {
		position: absolute;
		display: flex;
		width: 100%;
		height: 24rem;
		background-image: linear-gradient(#1830428c, #1830428c);
		text-align: center;
		color: var(--white);
		text-shadow: -1px 2px 1px #000;
		flex-direction: column;
		place-items: center;
		justify-content: center;

		img {
			margin-top: -20px;
			margin-bottom: 3px;
			box-shadow: -1px 2px 1px #000000b5;
			border-radius: 50%;
			width: 8rem;
			height: 8rem;
		}

		h1 {
			margin: 20px 0 10px;
			line-height: 44px;
			font-size: 2.375rem;
			font-weight: 400;
		}

		h2 {
			margin: 16px 0 0;
			line-height: 2rem;
			font-size: 1.5rem;
			font-weight: 400;
		}
	}

	.links {
		display: flex;
		padding: 8px 8px 16px;
		flex-direction: column;
	}

	.link {
		margin: 8px;
		border-radius: 0.25rem;
		padding: 12px 24px;
		background-color: var(--beige);
		color: var(--cherry);
		font-size: 20px;
		font-weight: 600;
		text-decoration: none;

		&:not(.with-icon) {
			text-align: center;
		}
	}
</style>

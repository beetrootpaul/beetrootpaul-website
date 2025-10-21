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
			<img src={asset(logoImage)} alt="logo" />
			<h1>beetrootpaul</h1>
			<h2 class="header-content-subtitle">
				pixel art<br />chiptune<br />game dev
			</h2>
		</div>
		<div class="links">
			{#each links as link}
				<a
					class={['link', { 'with-icon': !!link.icon }]}
					href={link.href}
					target="_blank"
				>
					{#if link.icon}
						<div>{link.label}</div>
						<img src={asset(link.icon)} alt="" role="presentation" />
					{:else}
						{link.label}
					{/if}
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

	:global(body) {
		background-color: var(--peach);
	}
	.container {
		width: 100vw;
		min-height: 100%;
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
		background-repeat: no-repeat;
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
		justify-content: center;
		place-items: center;

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

		&:hover {
			background-color: var(--peach);
		}

		&:not(.with-icon) {
			text-align: center;
		}

		&.with-icon {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			place-items: center;

			img {
				width: 24px;
				max-height: 24px;
				margin-top: -8px;
				margin-bottom: -8px;
			}
		}
	}

	@media screen and (max-width: 479px) {
		.card {
			width: 95%;
			margin: 1rem auto;
		}

		.header-bg {
			height: 16rem;
			background-size: auto 256px;
		}

		.header-content {
			box-sizing: border-box;
			height: 16rem;
			padding-left: 16px;
			padding-right: 16px;

			img {
				margin-top: 0;
				margin-bottom: 0;
				width: 5rem;
				height: 5rem;
			}

			h1 {
				margin-top: 10px;
				font-size: 1.6rem;
			}

			h2 {
				margin-top: 0;
				font-size: 1rem;
			}
		}

		.links {
			padding-left: 4px;
			padding-right: 4px;
		}

		.link {
			padding-left: 16px;
			padding-right: 16px;
			font-size: 16px;
		}
	}
</style>

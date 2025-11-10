import { expect, describe, test } from 'vitest';
import { page } from 'vitest/browser';
import PortfolioPage from './+page.svelte';
import Layout from '../+layout.svelte';
import { testViewports } from '$lib/test_viewports';

describe('Portfolio Page renders correctly on', async () => {
	testViewports.forEach(({ name, viewport, id }) => {
		test(name, async () => {
			const screen = page.render(Layout, { children: PortfolioPage });
			await page.viewport(viewport[0], viewport[1]);
			await expect(screen.container).toMatchScreenshot(`portfolio_page_${id}`, {
				timeout: 1000,
				screenshotOptions: {
					mask: [
						screen.getByTestId('artwork-thumbnail'),
						screen.getByTestId('progress-thumbnail'),
					],
				},
			});
		});
	});
});

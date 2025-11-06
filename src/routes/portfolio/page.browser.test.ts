import { expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import PortfoliPage from './+page.svelte';
import Layout from '../+layout.svelte';

test('Portfolio Page renders correctly', async () => {
	const screen = render(Layout, {
		children: PortfoliPage,
	});
	await expect(screen.container).toMatchScreenshot('portfolio_page', {
		timeout: 1000,
		screenshotOptions: {
			mask: [
				screen.getByTestId('artwork-thumbnail'),
				screen.getByTestId('progress-thumbnail'),
			],
		},
	});
});

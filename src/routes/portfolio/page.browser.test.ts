import { expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Portfolioage from './+page.svelte';
import Layout from '../+layout.svelte';

test('Portfolio Page renders correctly', async () => {
	const screen = render(Layout, {
		children: Portfolioage,
	});
	await expect(screen).toMatchScreenshot('portfolio_page');
});

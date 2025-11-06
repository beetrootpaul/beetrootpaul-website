import { expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import HomePage from './+page.svelte';
import Layout from './+layout.svelte';

test('Home Page renders correctly', async () => {
	const screen = render(Layout, {
		children: HomePage,
	});
	await expect(screen.container).toMatchScreenshot('home_page');
});

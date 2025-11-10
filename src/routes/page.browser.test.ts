import { expect, describe, test } from 'vitest';
import HomePage from './+page.svelte';
import Layout from './+layout.svelte';
import { page } from 'vitest/browser';
import { testViewports } from '$lib/test_viewports';

describe('Home Page renders correctly on', async () => {
	testViewports.forEach(({ name, viewport, id }) => {
		test(name, async () => {
			const screen = page.render(Layout, { children: HomePage });
			await page.viewport(viewport[0], viewport[1]);
			await expect(screen.container).toMatchScreenshot(`home_page_${id}`);
		});
	});
});

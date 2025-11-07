import { sveltekit } from '@sveltejs/kit/vite';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	// Tell Vitest to use the `browser` entry points in `package.json` files, even though it's running in Node
	// resolve: process.env.VITEST ? { conditions: ['browser'] } : undefined,
	test: {
		browser: {
			enabled: true,
			provider: playwright(),
			instances: [
				{
					name: 'iPhone SE, portrait',
					browser: 'chromium',
					viewport: { width: 375, height: 667 },
				},
				{
					name: 'iPhone SE, landscape',
					browser: 'chromium',
					viewport: { width: 667, height: 375 },
				},
				{
					name: 'iPad Mini, portrait',
					browser: 'chromium',
					viewport: { width: 768, height: 1024 },
				},
				{
					name: 'iPad Mini, landscape',
					browser: 'chromium',
					viewport: { width: 1024, height: 768 },
				},
				{
					name: 'iPad Pro, portrait',
					browser: 'chromium',
					viewport: { width: 1024, height: 1366 },
				},
				{
					name: 'iPad Pro, landscape',
					browser: 'chromium',
					viewport: { width: 1366, height: 1024 },
				},
				{
					name: 'Full HD',
					browser: 'chromium',
					viewport: { width: 1920, height: 1080 },
				},
			],
		},
	},
});

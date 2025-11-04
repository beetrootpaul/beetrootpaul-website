import { sveltekit } from '@sveltejs/kit/vite';
import { preview } from '@vitest/browser-preview';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	// Tell Vitest to use the `browser` entry points in `package.json` files, even though it's running in Node
	// resolve: process.env.VITEST ? { conditions: ['browser'] } : undefined,
	test: {
		browser: {
			enabled: true,
			provider: preview(),
			instances: [{ browser: 'chromium' }],
			viewport: { width: 1280, height: 768 },
		},
	},
});

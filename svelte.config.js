import { sveltePreprocess } from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';

const githubPagesDir = 'docs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		scss: {
			prependData: `@use 'src/lib/_mixins.scss' as *;`,
		},
	}),

	kit: {
		adapter: adapterStatic({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: githubPagesDir,
			assets: githubPagesDir,
			fallback: '404.html',
			precompress: false,
			strict: true,
		}),
	},
};

export default config;

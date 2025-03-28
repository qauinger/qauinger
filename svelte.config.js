import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { loadEnv } from 'vite';

/** @type {import('@sveltejs/kit').Config} */

const mode = process.env.NODE_ENV || 'development';
const env = loadEnv(mode, process.cwd());

export default {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	},

	server: {
		port: Number(env.PORT) || 3000
	}
}

// const config = {
// 	// Consult https://svelte.dev/docs/kit/integrations
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess(),

// 	kit: {
// 		adapter: adapter()
// 	},

// 	server: {
// 		port: process.env.PORT,
// 	},
// };

// export default config;

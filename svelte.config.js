import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
/** @type {@type {import('vite').UserConfig}} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		typescript: true
	}),
	kit: {
		adapter: adapter({ 
			out: 'build',
			precompress: false
		}),
		package: {
			dir: 'package'
			// emitTypes: true
		},
	}
};

export default config;

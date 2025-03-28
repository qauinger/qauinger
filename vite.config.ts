import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { loadEnv } from 'vite';

export default ({ mode }: {mode: string}) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

	const PORT = `${process.env.PORT ?? '3000'}`;
  
	console.log("MODE: " + mode + " USING PORT: " + PORT);

	return {
	  	server: {
			port: PORT,
			host: true,
			strictPort: true,
			allowedHosts: ['qauinger.com']
	  	},

		preview: {
			port: PORT,
		},

	  	plugins: [tailwindcss(), sveltekit()]
	}
}

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',

	vite: {
		plugins: [tailwindcss()],
	},

	css: ['~/assets/css/main.css'],
	devtools: { enabled: true },
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	image: {
		format: ['webp'],
		domains: ['www.prolinkresumes.com'],
	},
	modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/icon'],
});

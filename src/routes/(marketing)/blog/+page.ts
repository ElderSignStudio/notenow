import type { PageLoad } from './$types';
	import { env } from '$env/dynamic/public';
	import { PUBLIC_TEST, PUBLIC_FROM_DOT_ENV } from '$env/static/public';

export const load = (async ({ data }) => {

	// Evaluated at run-time on the server and sent to the client, but there's no guarantees it weill be available in production (depends on the platform)
	console.log('TEST from $env/dynamic/private', env.PUBLIC_TEST);
	console.log('FROM_DOT_ENV from $env/dynamic/private', env.PUBLIC_FROM_DOT_ENV);

	// Evaluated during build and injected when compiled
	console.log('TEST from $env/static/private', PUBLIC_TEST);
	console.log('FROM_DOT_ENV from $env/static/private', PUBLIC_FROM_DOT_ENV);

	const module = data.postType === 1 ? await import('./Post-1.svelte') : await import('./Post-2.svelte')
	return {
		...data,
		component: module.default
	};
}) satisfies PageLoad;
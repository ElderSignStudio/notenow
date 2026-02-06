import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { PostsResponse } from '$lib/types';
import { POSTS_PER_PAGE } from '$lib/constants';
import {env} from '$env/dynamic/private'
import {TEST, FROM_DOT_ENV} from '$env/static/private'

export const load = (async ({fetch, url}) => {

	// Evaluated at run-time, but there's no guarantees it weill be available in production (depends on the platform)
	console.log('TEST from $env/dynamic/private', env.TEST);
	console.log('FROM_DOT_ENV from $env/dynamic/private', env.FROM_DOT_ENV);

	// Evaluated during build and injected when compiled
	console.log('TEST from $env/static/private', TEST);
	console.log('FROM_DOT_ENV from $env/static/private', FROM_DOT_ENV);

	const page = +(url.searchParams.get('page') || 1)
	const postsRes = await fetch(`https://dummyjson.com/posts?limit=${POSTS_PER_PAGE}&skip=${(page - 1) * POSTS_PER_PAGE}`);

	if(!postsRes.ok) {
		error(postsRes.status, 'An error has occurred!')
	}

	return {
		title: 'The Blog',
		description: 'Our blog posts',
		posts: (await postsRes.json()) as PostsResponse,
		postType: Math.random() > 0.5 ? 1 : 2
	};
}) satisfies PageServerLoad;
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { PostsResponse } from '$lib/types';

export const load = (async ({fetch}) => {

	const postsRes = await fetch('/api/posts');

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
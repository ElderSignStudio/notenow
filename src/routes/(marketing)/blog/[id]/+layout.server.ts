import type { PostsResponse } from '$lib/types';
import type { LayoutServerLoad } from './$types';

export const load = (async ({depends}) => {

    depends('blog:single_page_layout');

	const postReq = await fetch(`https://dummyjson.com/posts?limit=3`);
	return {
		morePosts: (postReq.ok ? await postReq.json() : {error: 'Some Error'}) as PostsResponse | {error: string}
	};
}) satisfies LayoutServerLoad;
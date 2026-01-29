import { error } from '@sveltejs/kit';
// import type { PageLoad } from './$types';
import type { Post, PostComment } from '$lib/types';

export const load = (async ({params, fetch}) => {

    async function fetchPost() {
        const postRes = await fetch(`https://dummyjson.com/posts/${params.id}`);

        if(postRes.status !== 200) {
            error(postRes.status, 'Fail to load post.')
        }

        const postResJSON: Post = await postRes.json();
        return postResJSON;
    }

    async function fetchComments() {
        const postCommentsRes = await fetch(`https://dummyjson.com/posts/${params.id}/comments`);
        const commentsArray: PostComment[] = postCommentsRes.ok ? (await postCommentsRes.json()).comments : [];
        return commentsArray;
    }

    return {
        post: await fetchPost(),
        comments: await fetchComments()
    };
});
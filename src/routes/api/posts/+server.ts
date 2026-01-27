import { error, json, text } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({fetch}) => {
    const postsRes = await fetch('https://dummyjson.com/posts');
    const postResJSON = await postsRes.json();

    return json(postResJSON, {status: postsRes.status});

    // if you want to retun an error:
    // return error(401, 'Error');
};

export const POST: RequestHandler = async ({request}) => {
    const post = await request.json();
    if(!post.title) {
        error(400, 'Post title is required!')
    }
    // should insert post into database. Retunring a fake post atm
    return json({id: crypto.randomUUID(), title: post.title})
};

export const fallback: RequestHandler = ({ request }) => {
    return text(`${request.method} received!`);
};
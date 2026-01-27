import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({fetch}) => {
    const postsRes = await fetch('https://dummyjson.com/posts');
    const postResJSON = await postsRes.json();

    return json(postResJSON, {status: 200});
    
    // if you want to retun an error:
    // return error(401, 'Error');
};
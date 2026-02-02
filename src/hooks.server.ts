import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

export const handle1: Handle = async ({event, resolve}) => {

    const token = event.cookies.get('token');
    if (event.url.pathname.startsWith('/app') && !token) {
        throw redirect(307, '/signin');
    }

    event.locals.user = token ? {name: 'John', id: 1} : null;

    const response = await resolve(event);
    return response;
};

export const handle = sequence(handle1);
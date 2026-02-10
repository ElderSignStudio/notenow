import { getWorkspaceIDFromPageID } from '$lib/server/db/utils';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { pageAccess, pages, workspaces } from '$lib/server/db/schema';
import { and, eq } from 'drizzle-orm';
import { db } from '$lib/server/db';

export const load = (async ({ locals, route, params }) => {
	// TODO: Auth
	const isPage = route.id.startsWith('/(app)/(workspace)/p/[pid]');
	const workspaceId =
		isPage && params.pid ? await getWorkspaceIDFromPageID(params.pid) : params.pid;

	if (!workspaceId) {
		error(404, 'Not Found!');
	}

	const workspace = await db
		.select()
		.from(workspaces)
		.where(eq(workspaces.id, workspaceId))
		.limit(1)
		.then((r) => r[0]);

	if (!workspace) {
		error(404, 'Not Found!');
	}

	const userPages = await db
		.select({
			id: pages.id,
			title: pages.title,
			createdAt: pages.createdAt
		})
		.from(pages)
		.innerJoin(pageAccess, eq(pages.id, pageAccess.pageId))
		.where(and(eq(pages.workspaceId, workspaceId), eq(pageAccess.userId, locals.session.user.id)));

	return {
		workspace,
		pages: userPages
	};
}) satisfies LayoutServerLoad;

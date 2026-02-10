import { eq } from 'drizzle-orm';
import { pages } from './schema';
import { db } from '.';

export const getWorkspaceIDFromPageID = async (pageId: string) => {
	return (
		await db
			.select({
				workspaceId: pages.workspaceId
			})
			.from(pages)
			.where(eq(pages.id, pageId))
			.limit(1)
	)[0].workspaceId;
};

import { v } from "convex/values";
import { query } from "./_generated/server";
import { auth } from "./auth";
import { getAuthUserId } from "@convex-dev/auth/server";

export const current = query({
    args: { workspaceId: v.id('workspaces') },
    handler: async (ctx, args) => {
        const userId = await getAuthUserId(ctx);

        if (!userId) {
            return null;
        }

        const member = await ctx.db
        .query('members')
        .withIndex('by_workspace_id_user_id', (q) => 
            q.eq('workspaceId', args.workspaceId).eq('userId', userId)
        ).collect();

        if (!member) {
            return null
        }

        return member
    }
})
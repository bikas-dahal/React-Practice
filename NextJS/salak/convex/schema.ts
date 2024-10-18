import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";
 
const schema = defineSchema({
  ...authTables,
  workspaces: defineTable({
    name: v.string(),
    userId: v.id('users'),
    joinCode: v.string(),
  }),
  members: defineTable({
    userId: v.id('users'),
    workspaceId: v.id('workspaces'),
    role: v.union(v.literal('admin'), v.literal('member'))
  })
  .index('by_workspace_id', ['workspaceId'])
  .index('by_user_id', ['userId'])
  .index('by_workspace_id_user_id', ['workspaceId', 'userId']),
  
});
 
export default schema;
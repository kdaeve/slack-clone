import { v } from "convex/values";
import { defineSchema, defineTable} from "convex/server";
import { authTables } from "@convex-dev/auth/server"

const schema = defineSchema({
  ...authTables,
  workspace : defineTable({
    name : v.string(),
    userId : v.id("users"),
    joinCode : v.string(),
  }),
  members: defineTable({
    workspaceId: v.id("workspace"),
    userId: v.id("users"),
    role: v.union(v.literal("admin"), v.literal("member")),
  })
    .index("by_user_id", ["userId"])
    .index("by_workspace_id", ["workspaceId"])
    .index("by_workspace_id_user_id", ["workspaceId", "userId"]),
  channels: defineTable({
    name: v.string(),
    workspaceId: v.id("workspace"),
  })
    .index("by_workspace_id", ["workspaceId"]),
});

export default schema;

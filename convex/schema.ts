import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  thumbnailPolls: defineTable({
    title: v.string(),
    userId: v.string(),
    aImageId: v.string(),
    bImageId: v.string(),
    aVotes: v.number(),
    bVotes: v.number(),
    votedUserIds: v.array(v.string()),
  }),
  users: defineTable({
    userId: v.string(),
    email: v.string(),
    stripeId: v.optional(v.string()),
    credits: v.number(),
    isAnonymous: v.boolean(),
    stripeCompletedCheckoutSessionIds: v.array(v.string()),
  }).index("by_userId", ["userId"]),
});

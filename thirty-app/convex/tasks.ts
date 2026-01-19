import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

export const addNewTeam = mutation({
  args: {
    teamId: v.number(),
    teamName: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("teams", {
        teamId: args.teamId,
        name: args.teamName,
        taskClue: "Sample text for the next location clue for team " + args.teamName,
    });
  },
});

export const getTeamById = query({
  args: {
    teamId: v.number(),
  },
  handler: async (ctx, args) => {
    console.log("Fetching team with ID:", args.teamId);
    return await ctx.db.query("teams")
        .filter((q) => q.eq(q.field("teamId"), args.teamId))
        .first();
  },
});


import { convexAuth } from "@convex-dev/auth/server";
import Github  from "@auth/core/providers/github";
import Google  from "@auth/core/providers/google";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [Github, Google],
});

import type { AuthConfig } from "@auth/core";
import GitHub from "@auth/core/providers/github";
import type { Context } from "hono";

export function authConfig(c: Context): AuthConfig {
  return {
    secret: process.env.AUTH_SECRET,
    providers: [
      GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
    ]
  }
}
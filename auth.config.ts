//import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';
import Credentials from '@auth/core/providers/credentials';
import { db, eq, ne, user } from 'astro:db';


export default defineConfig({
  providers: [
    // GitHub({
    //   clientId: import.meta.env.GITHUB_CLIENT_ID,
    //   clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    // }),

    Credentials({

      credentials: {
        email: {},
        password: {}
      },

      authorize: async ({ email, password }) => {

        const client = await db.select().from(user).where(eq(user.email, `${email}`));

        if (!client) {
          throw new Error('Invalid credentials')
        }

        return {
          id: 'abcd',
          name: 'anything'
        }
      }
    })
  ],
});
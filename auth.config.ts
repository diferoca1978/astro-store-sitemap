//import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';
import Credentials from '@auth/core/providers/credentials';
import { db, eq, ne, user } from 'astro:db';
import type { AdapterUser } from '@auth/core/adapters';


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

        const [client] = await db.select().from(user).where(eq(user.email, `${email}`));

        console.log("🚀 ~ authorize: ~ client:", client)
        if (!client) {
          throw new Error('Invalid credentials')
        }

        // TODO: When the insert an user into our database, make the method to validate the password.

        const { password: _, ...rest } = client
        console.log("🚀rest:", rest)
        return { ...rest, id: rest.id.toString(), role: rest.role.toString() } // Here we're transform the id that is type number to a string to it doesn't crash with the type of authorize method.

      }
    })
  ],

  // Here we'll define the callbacks to expand our object session information.

  callbacks: {

    jwt: ({ token, user }) => {

      if (user) {
        token.user = user
      }

      return token
    },

    session: ({ session, token }) => {


      session.user = token.user as AdapterUser;

      console.log({ UserSession: session.user });

      return session
    }
  },



});
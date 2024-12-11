//import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';
import Credentials from '@auth/core/providers/credentials';
import Google from '@auth/core/providers/google';
import { db, eq, user } from 'astro:db';
import type { AdapterUser } from '@auth/core/adapters';



export default defineConfig({
  providers: [
    // Google({
    //   clientId: import.meta.env.AUTH_GOOGLE_ID,
    //   clientSecret: import.meta.env.AUTH_GOOGLE_SECRET,
    // }),

    Credentials({

      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },

      authorize: async ({ email, password }) => {

        const [client] = await db.select().from(user).where(eq(user.email, `${email}`));

        console.log("🚀 ~ authorize: ~ client:", client)

        if (!client) {
          throw new Error('User not found')
        }

        // TODO: When the insert an user into our database, make the method to validate the password.

        // if (!bcrypt.compareSync(password as string, client.password)) {
        //   throw new Error('Pass doesnot match')
        // }

        const { password: _, ...rest } = client

        return rest;

      }
    })
  ],

  // Here we'll define the callbacks to expand our object session to include more information.

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
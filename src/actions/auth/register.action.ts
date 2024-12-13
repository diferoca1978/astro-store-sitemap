import { defineAction } from 'astro:actions';
import { db, user } from 'astro:db';
import { z } from 'astro:schema';

export const registerUser = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    role_id: z.string().default('user'),
    remember_me: z.boolean().optional()
  }),
  handler: async (input) => {

    const newUser = await db
      .insert(user)
      .values(input)
      .returning()

    return newUser

  },
});

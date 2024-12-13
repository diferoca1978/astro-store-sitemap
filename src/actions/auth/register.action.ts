import { defineAction } from 'astro:actions';
import { db, user } from 'astro:db';
import { z } from 'astro:schema';
import bcrypt from 'bcryptjs'

export const registerUser = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    role_id: z.string().default('user'),
    remember_me: z.boolean().optional()
  }),
  handler: async (input) => {

    const hashedPass = bcrypt.hashSync(input.password)

    const userToRegister = {
      ...input,
      password: hashedPass
    }

    const newUser = await db
      .insert(user)
      .values(userToRegister)
      .returning()

    return newUser

  },
});

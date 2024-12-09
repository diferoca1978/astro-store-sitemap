import { DefaultSession, DefaultUser } from "@auth/core/types";

declare module 'auth/core7types' {
  interface User extends DefaultUser {
    role?: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}

// Here 
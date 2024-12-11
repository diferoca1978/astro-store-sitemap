import { DefaultSession, DefaultUser } from "@auth/core/types";

declare module '@auth/core/types' {
  interface User extends DefaultUser {
    role_id?: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}

// Here 
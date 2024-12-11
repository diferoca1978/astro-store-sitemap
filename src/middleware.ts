import { defineMiddleware } from "astro:middleware"
import { getSession } from 'auth-astro/server';

const noAuthRoutes = ['/login', '/register']

export const onRequest = defineMiddleware(async ({ url, locals, redirect, request }, next) => {

  const session = await getSession(request)
  const isLoggedIn = !!session // The double negation means that have a session.
  const user = session?.user // Here we take the session object to do the things easier.

  locals.isLoggedIn = isLoggedIn,
    locals.user = null
  locals.isAdmin = false

  if (user) { // Here we check if there is an user.
    locals.user = {
      name: user.name!, // With the exclamation character we tell that always have a email and a password.
      email: user.email!,
    }

    locals.isAdmin = user.role_id === 'admin'
  }

  // Then have the control the access through the user role.
  if (!locals.isAdmin && url.pathname.startsWith('/dashboard')) {
    return redirect('/')
  }

  if (isLoggedIn && noAuthRoutes.includes(url.pathname)) {
    return redirect('/')
  }

  return next();

})

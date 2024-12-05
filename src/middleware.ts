import { defineMiddleware } from "astro:middleware"

const noAuthRoutes = ['/login', '/register']

export const onRequest = defineMiddleware(async ({ url, locals, redirect }, next) => {

  const isLoggedIn = false

  locals.isLoggedIn = isLoggedIn,
    locals.user = null

  if (locals.user) {

  }

  // Then have the control the access through the user role.
  if (!isLoggedIn && url.pathname.startsWith('/dashboard')) {
    return redirect('/')
  }

  if (isLoggedIn && noAuthRoutes.includes(url.pathname)) {
    return redirect('/')
  }

  return next();

})

import { Auth } from '@auth/core';
import { parseString } from 'set-cookie-parser';
import Credentials from '@auth/core/providers/credentials';
import Google from '@auth/core/providers/google';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
import bcrypt from 'bcryptjs';

const defineConfig = (config) => {
  config.prefix ??= "/api/auth";
  config.basePath = config.prefix;
  return config;
};

const db = await createRemoteDatabaseClient({
  dbType: "libsql",
  remoteUrl: "libsql://astrostorefakedb-diferoca1978.turso.io",
  appToken: process.env.ASTRO_DB_APP_TOKEN ?? "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzY4NjI1MzksImlkIjoiYmNhNjg2NmEtYzRiNS00NDU4LWIyY2YtNTRiNzU0ZmIwM2I0In0.UFdUeKSdkMFqbGWYluECO6ceS9OP3HG2erKbckFxyBcx6dt6mqKIwn30R6xGJhoXHzLw4TzbeLjTr7YRNz1RAw"
});
const user = asDrizzleTable("user", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "user", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "user", "primaryKey": false, "optional": false } }, "email": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "email", "collection": "user", "primaryKey": false, "optional": false } }, "password": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "password", "collection": "user", "primaryKey": false, "optional": false } }, "createdAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "createdAt", "collection": "user", "default": "2025-01-14T14:59:26.999Z" } }, "role_id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "role_id", "collection": "user", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "roles", "primaryKey": true } } } } }, "deprecated": false, "indexes": {} }, false);
asDrizzleTable("roles", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "roles", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "roles", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const product = asDrizzleTable("product", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "product", "primaryKey": true } }, "description": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "description", "collection": "product", "primaryKey": false, "optional": false } }, "gender": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "gender", "collection": "product", "primaryKey": false, "optional": false } }, "price": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "price", "collection": "product", "primaryKey": false, "optional": false } }, "sizes": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "sizes", "collection": "product", "primaryKey": false, "optional": false } }, "slug": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "slug", "collection": "product", "primaryKey": false, "optional": false } }, "stock": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "stock", "collection": "product", "primaryKey": false, "optional": false } }, "tags": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "tags", "collection": "product", "primaryKey": false, "optional": false } }, "title": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "title", "collection": "product", "primaryKey": false, "optional": false } }, "type": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "type", "collection": "product", "primaryKey": false, "optional": false } }, "user": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "user", "collection": "product", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "user", "primaryKey": true } } } } }, "deprecated": false, "indexes": {} }, false);
const productImage = asDrizzleTable("productImage", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "productImage", "primaryKey": true } }, "image": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "image", "collection": "productImage", "primaryKey": false, "optional": false } }, "productId": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "productId", "collection": "productImage", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "product", "primaryKey": true } } } } }, "deprecated": false, "indexes": {} }, false);

const authConfig = defineConfig({
  providers: [
    Google({
      clientId: "",
      clientSecret: ""
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async ({ email, password }) => {
        const [client] = await db.select().from(user).where(eq(user.email, `${email}`));
        if (!client) {
          throw new Error("User not found");
        }
        if (!bcrypt.compareSync(password, client.password)) {
          throw new Error("Password not match");
        }
        const { password: _, ...rest } = client;
        return rest;
      }
    })
  ],
  // Here we'll define the callbacks to expand our object session to include more information.
  callbacks: {
    jwt: ({ token, user: user2 }) => {
      if (user2) {
        token.user = user2;
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;
      return session;
    }
  }
});

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_URL": "http://localhost:4321", "SITE": "https://sitemap-astro-store.netlify.app/", "SSR": true};
const actions = [
  "providers",
  "session",
  "csrf",
  "signin",
  "signout",
  "callback",
  "verify-request",
  "error"
];
function AstroAuthHandler(prefix, options = authConfig) {
  return async ({ cookies, request }) => {
    const url = new URL(request.url);
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions.includes(action) || !url.pathname.startsWith(prefix + "/")) return;
    const res = await Auth(request, options);
    if (["callback", "signin", "signout"].includes(action)) {
      const getSetCookie = res.headers.getSetCookie();
      if (getSetCookie.length > 0) {
        getSetCookie.forEach((cookie) => {
          const { name, value, ...options2 } = parseString(cookie);
          cookies.set(name, value, options2);
        });
        res.headers.delete("Set-Cookie");
      }
    }
    return res;
  };
}
function AstroAuth(options = authConfig) {
  const { AUTH_SECRET, AUTH_TRUST_HOST, VERCEL, NODE_ENV } = Object.assign(__vite_import_meta_env__, { AUTH_TRUST_HOST: "true", AUTH_SECRET: "06130770581974538378319548067054", _: process.env._, NODE: process.env.NODE, NODE_ENV: process.env.NODE_ENV });
  options.secret ??= AUTH_SECRET;
  options.trustHost ??= !!(AUTH_TRUST_HOST ?? VERCEL ?? NODE_ENV !== "production");
  const { prefix = "/api/auth", ...authOptions } = options;
  const handler = AstroAuthHandler(prefix, authOptions);
  return {
    async GET(context) {
      return await handler(context);
    },
    async POST(context) {
      return await handler(context);
    }
  };
}
async function getSession(req, options = authConfig) {
  options.secret ??= "06130770581974538378319548067054";
  options.trustHost ??= true;
  const url = new URL(`${options.prefix}/session`, req.url);
  const response = await Auth(new Request(url, { headers: req.headers }), options);
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length) return null;
  if (status === 200) return data;
  throw new Error(data.message);
}

export { AstroAuth as A, productImage as a, db as d, getSession as g, product as p, user as u };

// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

import auth from 'auth-astro';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), auth(), db()],
  adapter: netlify()
});
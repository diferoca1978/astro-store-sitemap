// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

import auth from 'auth-astro';

import db from '@astrojs/db';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), auth(), db(), react(), sitemap()],
  adapter: netlify()
});
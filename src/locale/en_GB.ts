/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import base from '../locales/base';
import en from '../locales/en';
import en_GB from '../locales/en_GB';

/**
 * The faker instance for the `en_GB` locale.
 *
 * - Language: English (Great Britain)
 * - Endonym: English (Great Britain)
 *
 * This instance uses the following locales internally (in descending precedence):
 *
 * - `en_GB`
 * - `en`
 * - `base`
 */
export const faker = new Faker({
  locale: [en_GB, en, base],
});

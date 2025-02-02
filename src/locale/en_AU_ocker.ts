/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import base from '../locales/base';
import en from '../locales/en';
import en_AU from '../locales/en_AU';
import en_AU_ocker from '../locales/en_AU_ocker';

/**
 * The faker instance for the `en_AU_ocker` locale.
 *
 * - Language: English (Australia Ocker)
 * - Endonym: English (Australia)
 *
 * This instance uses the following locales internally (in descending precedence):
 *
 * - `en_AU_ocker`
 * - `en_AU`
 * - `en`
 * - `base`
 */
export const faker = new Faker({
  locale: [en_AU_ocker, en_AU, en, base],
});

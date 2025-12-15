export const locales = ['de', 'en', 'fr', 'it'] as const;
export type Locale = (typeof locales)[number]; export const localeNames: Record<Locale, string> = { de: 'DE', en: 'EN', fr: 'FR', it: 'IT'
}; export const defaultLocale: Locale = 'de';

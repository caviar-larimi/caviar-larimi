import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "./routing";

export default getRequestConfig(async (params: any) => {
  // next-intl Versionen unterscheiden sich: mal `requestLocale`, mal `locale`
  let locale =
    (await params?.requestLocale) ||
    params?.locale ||
    defaultLocale;

  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

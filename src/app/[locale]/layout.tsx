import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {unstable_setRequestLocale} from 'next-intl/server';

const locales = ['de','en','fr','it'];

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  if (!locales.includes(locale)) notFound();

  unstable_setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

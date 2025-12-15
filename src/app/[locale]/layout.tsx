import '../globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type {Metadata} from 'next';
import {locales} from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; export const metadata: Metadata = {
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' }, title: 'LUXUS CAVIAR LARIMI — Premium Caviar', description: 'Luxury caviar with transparent origin, refined taste and premium service.'
}; export function generateStaticParams() { return locales.map((locale) => ({locale}));
} export default async function LocaleLayout({ children, params
}: { children: React.ReactNode; params: {locale: string};
}) { const messages = await getMessages(); return ( <html lang={params.locale}> <body> <NextIntlClientProvider messages={messages}> <Navbar /> <main className="min-h-[70vh]">{children}</main> <Footer /> </NextIntlClientProvider> </body> </html> );
}

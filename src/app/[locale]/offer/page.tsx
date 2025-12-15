import {unstable_setRequestLocale} from 'next-intl/server';

export default function OfferPage({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);

  // ...dein Code
}

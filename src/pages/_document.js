import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
          <title>Taxi T.C.</title>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="viewport" content="width=device-width, user-scalable=no"/>
          <meta name="description" content="Taxi T.C. brengt u met een luxe en comfort naar uw bestemming. Bezoek de website en maak direct een afspraak."/>
          <meta name="keywords" content="T.C. TC Taxi"/>
          <meta name="og:description" content="Taxi T.C. brengt u met een luxe en comfort naar uw bestemming. Bezoek de website en maak direct een afspraak."/>
          <meta property="og:url" content="https://www.taxitc.nl/"/>
          <meta property="og:image" content="/logo.png" />
          <meta property="og:title" content="T.C. Taxi"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

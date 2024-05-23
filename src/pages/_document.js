import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
          <title>Mavi Taxi</title>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="viewport" content="width=device-width, user-scalable=no"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

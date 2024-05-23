import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta name="format-detection" content="telephone=no"/>
      </Head>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  ) 
}

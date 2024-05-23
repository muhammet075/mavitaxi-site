import { useEffect } from "react";
import Hero from "../components/hero";
import PriceCalculator from "../components/pricecalculator";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Mavi Taxi</title>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="viewport" content="width=device-width, user-scalable=no"/>
        <meta name="description" content="Mavi Taxi brengt u met luxe en comfort naar uw bestemming. Bezoek onze website en maak direct een afspraak."/>
        <meta name="keywords" content="Mavi Taxi"/>
        <meta name="og:description" content="Mavi Taxi brengt u met luxe en comfort naar uw bestemming. Bezoek onze website en maak direct een afspraak."/>
        <meta property="og:url" content="https://www.mavitaxi.nl/"/>
        <meta property="og:image" content="/logo.png" />
        <meta property="og:title" content="Mavi Taxi"/>
      </Head>
      <div>
        <Hero />
        <PriceCalculator />
      </div>
    </>
  );
}

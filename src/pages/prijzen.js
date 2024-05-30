import { useEffect } from "react";
import PriceCalculator from "../components/pricecalculator";
import Head from "next/head";

export default function Prijzen() {
  useEffect(() => {
  }, []);

  return (
    <>
      <Head>
        <title>Prijzen - Mavi Taxi</title>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="viewport" content="width=device-width, user-scalable=no"/>
        <meta name="description" content="Bekijk de prijzen voor onze luxe en comfortabele taxidiensten bij Mavi Taxi. Neem een kijkje op onze website voor meer informatie."/>
        <meta name="keywords" content="Mavi Taxi, prijzen"/>
        <meta name="og:description" content="Bekijk de prijzen voor onze luxe en comfortabele taxidiensten bij Mavi Taxi. Neem een kijkje op onze website voor meer informatie."/>
        <meta property="og:url" content="https://www.mavitaxi.nl/prijzen"/>
        <meta property="og:image" content="/logo.png" />
        <meta property="og:title" content="Prijzen - Mavi Taxi"/>
      </Head>

      <div className='container'>
        <h1 id='prijstext'>Prijzen bij Mavi Taxi</h1>
        {/* <p id='prijscontent'>Voor meer informatie over onze prijzen kunt u ons telefonisch bereiken op: Binnenkort. Onze klantenservice staat klaar om al uw vragen te beantwoorden en u te voorzien van de benodigde details. Daarnaast bieden wij u de mogelijkheid om een schatting van het totale bedrag van uw rit te krijgen door gebruik te maken van onze handige prijs calculator hieronder. Voer eenvoudigweg de benodigde gegevens in en u krijgt direct een indicatie van de kosten. Deze tool is ontworpen om u te helpen bij het plannen van uw reis en het beheren van uw budget. Aarzel niet om contact met ons op te nemen als u verdere assistentie nodig heeft.</p> */}
        <br/><br/>
      </div>
      <PriceCalculator />
    </>
  );
}

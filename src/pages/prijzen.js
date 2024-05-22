import { useEffect } from "react";
import { Translate } from "../components/translate";
import PriceCalculator from "../components/pricecalculator";
import Head from "next/head";

export default function Prijzen() {
  useEffect(() => {
    Translate();
  }, []);

  return (
    <>
      <Head>
        <title>Taxi T.C. - Prijzen</title>
      </Head>

      <div className='container'>
        <h1 id='prijstext'>Prijzen</h1>
        <p id='prijscontent'>
          U kunt ons bellen op: 0614622099 voor meer informatie voor de prijzen.
          U kunt ook de onderstaande prijs calculator gebruiken om een schatting
          van het totale bedrag te krijgen van uw rit.
        </p>
      </div>
      <PriceCalculator />
    </>
  );
}

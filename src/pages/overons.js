import { useEffect } from "react";
import { Translate } from "../components/translate";
import Link from "next/link";
import Head from "next/head";

export default function Overons() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <>
            <Head>
                <title>Taxi T.C. - Over ons</title>
            </Head>

            <div className="container">
                <h1 id="overonstext">Over ons</h1>
                <p id="overonscontent1">Taxi T.C. is een snelle, professionele en betrouwbare Taxibedrijf die werkzaam is vooral in Amsterdam en omstreken. Zoals, Zaandam, Amstelveen, Hoofddorp, Haarlem en nog veel meer plaatsen!</p>
                <p id="overonscontent2">De diensten die Taxi T.C. uitvoerdt wordt onder verplichte vergunning van het ministerie van Verkeer en Waterstaat verricht. Met de opgeleide en ervaren chaffeurs vana Taxi T.C. bent u altijd veilig en snel op uw locatie. De Mercedes-Benz Vito is voorzien van veel comfort zoals airco en nog veel meer. U kunt ons bellen op: 0614622099 voor meer informatie. U kunt ook de prijs calculator gebruiken op de prijzen pagina. Klik in het menu op "Prijzen" om daarheen te gaan en om een schatting van het totale bedrag te krijgen van uw rit.</p>
            </div>
        </>
    )
  }
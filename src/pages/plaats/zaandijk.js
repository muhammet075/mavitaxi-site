import { useEffect } from "react";
import { Translate } from "../../components/translate";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import arrowIco from "../../assets/icons/arrow.svg";
import goldPhoneIco from "../../assets/icons/goldphone.svg";
import goldMailIco from "../../assets/icons/goldmail.svg";
import WhatsAppIco from "../../assets/icons/whatsapp.svg";

export default function Zaandijk() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <>
            <Head>
                <title>Taxi T.C. - Taxi Bestellen Zaandijk</title>
            </Head>

            <div className="container plaatspagina">
                <span><Link href="/rijgebieden"><Image src={arrowIco} alt="Pijl Icoontje"/></Link><h1>Taxi Zaandijk</h1></span>

                <p id="zaandijk1">Heeft u een taxi of een lift nodig naar Zaandijk? Bel ons dan op: 06 12 34 56 78. Met onze ervaren chauffeurs brengen wij u naar Zaandijk of halen wij u hier op. Wij halen u op in een luxe Mercedes-Benz Vito met vele luxe opties. U wordt in de meest comfortabele manier vervoerd.</p>
                <h2 id="zaandijk2">Taxi bestellen Zaandijk</h2>
                <p id="zaandijk3">Neem contact met ons op met de volgende mogelijkheden hieronder om een Taxi te roepen naar Zaandijk. De diensten die Taxi T.C. uitvoert wordt onder verplichte vergunning van het ministerie van Verkeer en Waterstaat verricht.</p>
            </div>

            <div className="container afspraak plaatsafspraak">
                <ul>
                    <li><Link href="https://wa.me/?phone=31614622099"><Image src={goldPhoneIco} alt="Telefoon icoon"/> 06 14 62 20 99</Link></li>
                    <li><Link href="https://wa.me/?phone=31614622099"><Image src={WhatsAppIco} alt="WhatsApp icoon"/> WhatsApp</Link></li>
                    <li><Link href="mailto:taxi-tc@hotmail.com"><Image src={goldMailIco} alt="Mail icoon"/> Mail</Link></li>
                </ul>
            </div>
        </>
    )
  }
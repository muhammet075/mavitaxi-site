import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Overons() {

    useEffect(() => {
    }, []);

    return (
        <>
            <Head>
                <title>Over ons - Mavi Taxi</title>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="viewport" content="width=device-width, user-scalable=no"/>
                <meta name="description" content="Mavi Taxi is uw betrouwbare partner voor luxe en comfortabel vervoer. Ontdek meer over ons en onze diensten op onze website."/>
                <meta name="keywords" content="Mavi Taxi, over ons"/>
                <meta name="og:description" content="Mavi Taxi is uw betrouwbare partner voor luxe en comfortabel vervoer. Ontdek meer over ons en onze diensten op onze website."/>
                <meta property="og:url" content="https://www.mavitaxi.nl/over-ons"/>
                <meta property="og:image" content="/logo.png" />
                <meta property="og:title" content="Over ons - Mavi Taxi"/>
            </Head>

            <div className="container">
                <h1 id="overonstext">Over ons</h1>

                <h2>Mavi Taxi - Uw Betrouwbare Taxidienst</h2>
                <p>Mavi Taxi is een dynamisch, professioneel en betrouwbaar taxibedrijf dat zich voornamelijk richt op klanten in Amsterdam en de omliggende gebieden. Wij bieden onze diensten aan in diverse steden en dorpen, waaronder Zaandam, Amstelveen, Hoofddorp, Haarlem en vele andere locaties. Ons doel is om u een hoogwaardige en zorgeloze reiservaring te bieden, ongeacht uw bestemming.</p>

                <h2>Onze Vergunning en Veiligheid</h2>
                <p>Onze dienstverlening wordt uitgevoerd onder de verplichte vergunning van het Ministerie van Verkeer en Waterstaat. Dit waarborgt dat al onze activiteiten voldoen aan de strengste normen op het gebied van veiligheid en kwaliteit. Wij zijn trots op ons team van goed opgeleide en ervaren chauffeurs, die allemaal zijn geselecteerd op basis van hun professionaliteit, rijvaardigheid en klantvriendelijkheid. Met Mavi Taxi bent u verzekerd van een veilige, snelle en comfortabele rit naar uw bestemming.</p>

                <h2>Onze Vloot</h2>
                <p>Onze vloot bestaat uit luxe voertuigen, zoals de Mercedes-Benz Vito, die is uitgerust met een breed scala aan voorzieningen om uw reis zo aangenaam mogelijk te maken. Denk hierbij aan airconditioning voor een comfortabele temperatuur, ruime zitplaatsen voor extra comfort en diverse andere functies die uw rit aangenamer maken.</p>

                <h2>Voordelen van Onze Voertuigen</h2>
                    <p>- Airconditioning voor een aangename temperatuur<br/>
                    - Ruime zitplaatsen voor extra comfort<br/>
                    - Modern en goed onderhouden voertuigen</p>

                <h2>Contact en Informatie</h2>
                <p>Voor meer informatie over onze diensten en prijzen kunt u ons altijd telefonisch bereiken op: 0618365689. Onze klantenservice staat klaar om al uw vragen te beantwoorden en u te voorzien van de nodige informatie. We begrijpen dat transparantie en duidelijkheid belangrijk zijn, daarom bieden wij ook een gebruiksvriendelijke prijs calculator aan op onze website.</p>

                <h2>Gebruik Onze Prijs Calculator</h2>
                <p>Om de prijs calculator te gebruiken, bezoekt u eenvoudigweg de prijzenpagina op onze website door in het menu op "Prijzen" te klikken. Voer de benodigde gegevens in en u krijgt direct een indicatie van de kosten. Deze tool is ontworpen om u te helpen bij het plannen en budgetteren van uw reis, zodat u niet voor verrassingen komt te staan.</p>

                <h2>Onze Diensten</h2>
                <p>Bij Mavi Taxi streven we ernaar om onze klanten de best mogelijke service te bieden. Of u nu een rit naar het vliegveld nodig heeft, een zakelijke afspraak heeft of gewoon een avondje uit plant, wij staan voor u klaar. Aarzel niet om contact met ons op te nemen als u verdere vragen heeft of aanvullende informatie wenst. Uw tevredenheid is onze hoogste prioriteit, en we kijken ernaar uit om u van dienst te mogen zijn.</p>

            </div>
        </>
    )
  }
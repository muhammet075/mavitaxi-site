import { useEffect } from "react";
import { Translate } from "../components/translate";
import Image from "next/image";
import Link from "next/link";
import arrowIco from "../assets/icons/arrow.svg";
import Head from "next/head";

export default function Rijgebieden() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <>
        <Head>
            <title>Taxi T.C. - Rij gebieden</title>
        </Head>

            <div className="container rijgebieden">
                <section>
                    <h1 id="rijgebiedentext">Rij gebieden</h1>
                    <p id="rijgebiedencontent1">Bekijk hieronder de meest beroemde plaatsen waar Taxi T.C. naar toe rijdt. Wilt u meer informatie lezen van één van de plaatsnamen hieronder? Klik op de plaatsnaam die u wilt en lees meer.</p>
                    <h2 id="rijgebiedencontent2">Beroemde gebieden</h2>
                </section>

                <div>
                    <Link href="/plaats/amsterdam">
                        <section>
                            <h3>Amsterdam <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/plaats/amstelveen">
                        <section>
                            <h3>Amstelveen<Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/plaats/zaandam">
                        <section>
                            <h3>Zaandam <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/plaats/diemen">
                        <section>
                            <h3>Diemen <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/plaats/hoofddorp">
                        <section>
                            <h3>Hoofddorp <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/plaats/haarlem">
                        <section>
                            <h3>Haarlem <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/plaats/zaandijk">
                        <section>
                            <h3>Zaandijk <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/plaats/krommenie">
                        <section>
                            <h3>Krommenie <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/plaats/assendelft">
                        <section>
                            <h3>Assendelft <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/plaats/wormerveer">
                        <section>
                            <h3>Wormerveer <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/plaats/oostzaan">
                        <section>
                            <h3>Oostzaan <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>
                </div>
            </div>
        </>
    )
  }
import { useEffect } from "react";
import { Translate } from "../components/translate";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/footer.module.css";
import WhatsAppIco from "../assets/icons/whatsapp.svg";
import mailIco from "../assets/icons/mail.svg";
import phoneIco from "../assets/icons/phone.svg";
import vito1 from "../assets/vitoecht.png";
import Logo from "../assets/Logo.svg";



export default function Foter() {

    useEffect(() => {
        Translate();

        document.getElementById("currentyear").innerHTML = new Date().getFullYear();

    }, []);

    return (
        <>
            <span id="whatsappbtn"><Link href="https://wa.me/?phone=31614622099"><Image src={WhatsAppIco} alt="Whatsapp Logo"/></Link></span>
            <footer className={styles.footer}>  
                <span></span>
                <div>
                    <section>
                        <ul>
                            <li><Link href="/"><Image src={Logo} alt="Logo van Taxi T.C."/></Link></li>
                            <li>KVK: 70061157</li>
                            <li>BTW: 020749697B03</li>
                            <li>IBAN: NL12INGB0008148386</li>
                            <li><Link href="https://wa.me/?phone=31614622099"><Image src={phoneIco} alt="Telefoon Icon"/> 0614622099</Link></li>
                            <li><Link href="mailto:taxi-tc@hotmail.com"><Image src={mailIco} alt="Mail Icon"/> taxi-tc@hotmail.com</Link></li>
                            <li><Link href="https://wa.me/?phone=31614622099"><Image src={WhatsAppIco} alt="WhatsApp Icon"/> WhatsApp</Link></li>
                        </ul>

                        <ul>
                            <li><h2 id="footertitel1">Paginas</h2></li>
                            <li><Link href="/" id="footerlink1">Home</Link></li>
                            <li><Link href="/prijzen" id="footerlink2">Prijzen</Link></li>
                            <li><Link href="/overons" id="footerlink3">Over ons</Link></li>
                            <li><Link href="/rijgebieden" id="footerlink4">Rij gebieden</Link></li>
                            <li><Link href="/afspraak" id="footerlink5">Afspraak</Link></li>
                            <li><Link href="/privacypolicy">Privacy Policy</Link></li>
                            <li><Link href="/sitemap.xml">Sitemap</Link></li>
                        </ul>
                        
                        <ul>
                            <li><h2 id="footertitel2">Rij gebieden</h2></li>
                            <li><Link href="/plaats/amsterdam">Taxi Amsterdam</Link></li>
                            <li><Link href="/plaats/amstelveen">Taxi Amstelveen</Link></li>
                            <li><Link href="/plaats/zaandam">Taxi Zaandam</Link></li>
                            <li><Link href="/plaats/diemen">Taxi Diemen</Link></li>
                            <li><Link href="/plaats/hoofddorp">Taxi Hoofddorp</Link></li>
                        </ul>

                        <ul>
                            <li><Link href="/plaats/haarlem">Taxi Haarlem</Link></li>
                            <li><Link href="/plaats/haarlem">Taxi Zaandijk</Link></li>
                            <li><Link href="/plaats/krommenie">Taxi Krommenie</Link></li>
                            <li><Link href="/plaats/assendelft">Taxi Assendelft</Link></li>
                            <li><Link href="/plaats/wormerveer">Taxi Wormerveer</Link></li>
                            <li><Link href="/plaats/oostzaan">Taxi Oostzaan</Link></li>
                        </ul>
                    </section>

                    <section>
                        <p>&copy; Copyright 2017 - <span id="currentyear">.</span> <span id="footercopyright">Alle rechten voorbehouden.</span></p>
                    </section>
                </div>
            </footer>
        </>
    )
  }
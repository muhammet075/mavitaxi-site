import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/footer.module.css";
import WhatsAppIco from "../assets/icons/whatsapp.svg";
import InstaIco from "../assets/icons/instagram.svg";
import mailIco from "../assets/icons/mail.svg";
import phoneIco from "../assets/icons/phone.svg";
import vito1 from "../assets/vitoecht.png";
import Logo from "../assets/logo.png";



export default function Foter() {

    useEffect(() => {

        document.getElementById("currentyear").innerHTML = new Date().getFullYear();

    }, []);

    return (
        <>
            <span id="whatsappbtn"><Link href="https://wa.me/?phone=31618365689"><Image src={WhatsAppIco} alt="Whatsapp Logo"/></Link></span>
            <footer className={styles.footer}>  
                <span></span>
                <div>
                    <section>
                        <ul>
                            <li><Link href="/"><Image src={Logo} alt="Logo van Mavi Taxi"/></Link></li>
                        </ul>

                        <ul>
                            <li><h2>Mavi Taxi</h2></li>
                            <li>KVK: 89979214</li>
                            <li><Link href="https://wa.me/?phone=31618365689"><Image src={phoneIco} alt="Telefoon Icoon"/> 0618365689</Link></li>
                            <li><Link href="mailto:info@mavitaxi.nl"><Image src={mailIco} alt="Mail Icoon"/> info@mavitaxi.nl</Link></li>
                            <li><Link href="https://wa.me/?phone=31618365689"><Image src={WhatsAppIco} alt="WhatsApp Icoon"/> WhatsApp</Link></li>
                            <li><Link href="https://www.instagram.com/mavi.taxi" target="_blank"><Image src={InstaIco} alt="Instagram Icoon"/> Instagram</Link></li>
                        </ul>

                        <ul>
                            <li><h2 id="footertitel1">Paginas</h2></li>
                            <li><Link href="/" id="footerlink1">Home</Link></li>
                            <li><Link href="/prijzen" id="footerlink2">Prijzen</Link></li>
                            <li><Link href="/overons" id="footerlink3">Over ons</Link></li>
                            <li><Link href="/afspraak" id="footerlink5">Afspraak</Link></li>
                            <li><Link href="/privacybeleid">Privacybeleid</Link></li>
                        </ul>
                        
                    </section>

                    <section>
                        <p>Mavi Taxi - &copy; Copyright - <span id="currentyear">.</span></p>
                        <p>Website ontwikkeling door <Link href="https://altinweb.nl/">Altinweb <img src="https://altinweb.nl/_next/static/media/altinweb-logo.dda733f0.svg" alt="Logo van Altinweb"/></Link></p>
                    </section>
                </div>
            </footer>
        </>
    )
  }
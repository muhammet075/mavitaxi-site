import { useEffect, useState, useRef } from "react";
import { Translate } from "../components/translate"; 
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Logo from "../assets/Logo.svg";
import MailIco from "../assets/icons/mail.svg";
import PhoneIco from "../assets/icons/phone.svg";
import hamburgerIco from "../assets/icons/hamburger.svg";
import closeIco from "../assets/icons/close.svg";
import WhatsAppIco from "../assets/icons/whatsapp.svg";
import sessionstorage from "sessionstorage";

function Header() {

    function openLanguageMenu(){
        document.querySelector(".languagemenu").classList.toggle("displaynone");
        document.querySelector(".closelanguages").classList.toggle("displaynone");
    }


    useEffect(() => {

        if (sessionstorage.getItem("language") === "nl"){
            document.querySelector(".selectedlanguage").innerHTML = "🇳🇱";
        } else if (sessionstorage.getItem("language") === "en"){
            document.querySelector(".selectedlanguage").innerHTML = "🇬🇧";
        } else if (sessionstorage.getItem("language") === "es"){
            document.querySelector(".selectedlanguage").innerHTML = "🇪🇸";
        } else if (sessionstorage.getItem("language") === "fr"){
            document.querySelector(".selectedlanguage").innerHTML = "🇫🇷";
        } else if (sessionstorage.getItem("language") === "ch"){
            document.querySelector(".selectedlanguage").innerHTML = "🇨🇳";
        } else {
            document.querySelector(".selectedlanguage").innerHTML = "🇳🇱";
        }

        document.querySelector(".closelanguages").addEventListener("click", () => {
            document.querySelector(".languagemenu").classList.add("displaynone");
            document.querySelector(".closelanguages").classList.add("displaynone");       
        })

    });


        function toggleLanguage(){

            if (event.target.classList.contains("nl")){
                sessionstorage.setItem("language", "nl");
                document.querySelector(".selectedlanguage").innerHTML = "🇳🇱";
            } else if (event.target.classList.contains("en")){
                sessionstorage.setItem("language", "en");
                document.querySelector(".selectedlanguage").innerHTML = "🇬🇧";
            } else if (event.target.classList.contains("es")){
                sessionstorage.setItem("language", "es");
                document.querySelector(".selectedlanguage").innerHTML = "🇪🇸";
            } else if (event.target.classList.contains("fr")){
                sessionstorage.setItem("language", "fr");
                document.querySelector(".selectedlanguage").innerHTML = "🇫🇷";
            } else if (event.target.classList.contains("ch")){
                sessionstorage.setItem("language", "ch");
                document.querySelector(".selectedlanguage").innerHTML = "🇨🇳";
            }

            document.querySelector(".languagemenu").classList.add("displaynone");
            document.querySelector(".closelanguages").classList.add("displaynone");
            
            Translate();
        }

        function openHamburgerMenu(){
            document.querySelector(".hamburgermenu").classList.remove("removehamburger");
            document.querySelector(".hamburgermenu").classList.add("openhamburger");
        }

        function closeHamburgerMenu(){
            document.querySelector(".hamburgermenu").classList.remove("openhamburger");
            document.querySelector(".hamburgermenu").classList.add("removehamburger");
        }


    return(      
        <header className={styles.header}>  
            <div>
                <div>
                    <Link href="/"><Image src={Logo} alt="Logo van Taxi T.C."/></Link>
                    <section>
                        <Link href="mailto:taxi-tc@hotmail.com"><span><Image src={MailIco} alt="Mail icoontje"/>taxi-tc@hotmail.com</span></Link>
                        <Link href="https://wa.me/?phone=31614622099"><span><Image src={PhoneIco} alt="Telefoon icoontje"/>0614622099</span></Link>
                        <Link href="https://wa.me/?phone=31614622099"><span><Image src={WhatsAppIco} alt="WhatsApp icoontje"/>WhatsApp</span></Link>
                    </section>
                </div>
            </div>
            <div>
                <nav>
                    <button onClick={openHamburgerMenu} id="hamburgerbtn"><Image src={hamburgerIco} alt="Hamburger menu icoon"/></button>
                    <section className="hamburgermenu">
                        <ul>
                            <li><Link href="/" id="nav1" onClick={closeHamburgerMenu}>Home</Link></li>
                            <li><Link href="/prijzen" id="nav2" onClick={closeHamburgerMenu}>Prijzen</Link></li>
                            <li><Link href="/overons" id="nav3" onClick={closeHamburgerMenu}>Over ons</Link></li>
                            <li><Link href="/rijgebieden" id="nav4" onClick={closeHamburgerMenu}>Rij gebieden</Link></li>
                            <li><Link href="/afspraak" id="nav5" onClick={closeHamburgerMenu}>Afspraak</Link></li>
                        </ul>
                        <button onClick={closeHamburgerMenu} id="hamburgerclosebtn"><Image src={closeIco} alt="Kruis icoon"/></button>
                    </section>
                    
                    <button onClick={openLanguageMenu} className="selectedlanguage">🇳🇱</button>

                    
                        <ul className="languagemenu displaynone">
                            <li><button onClick={toggleLanguage} id="nlflag" className="nl">🇳🇱</button></li>
                            <li><button onClick={toggleLanguage} id="enflag" className="en">🇬🇧</button></li>
                            <li><button onClick={toggleLanguage} id="esflag" className="es">🇪🇸</button></li>
                            <li><button onClick={toggleLanguage} id="frflag" className="fr">🇫🇷</button></li>
                            <li><button onClick={toggleLanguage} id="chflag" className="ch">🇨🇳</button></li>
                        </ul>
                    
                </nav>
            </div>
            <div></div>
            <div className="closelanguages displaynone"></div>
        </header>
    )
  }
  
  export default Header;
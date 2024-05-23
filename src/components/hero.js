import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/hero.module.css";
import taxiauto from "../assets/taxiauto.png";
import phoneIco from "../assets/icons/phone.svg";

import vitoIco from "../assets/icons/vito.svg";
import appointmentIco from "../assets/icons/appointment.svg";
import roadIco from "../assets/icons/road.svg";
import clockIco from "../assets/icons/clock.svg";
import arrowIco from "../assets/icons/arrow.svg";

import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(      
        <div className={styles.hero}>  
            <div>
                <div>
                    <section>
                            <h1 id="herotitel">Taxi nodig?</h1>
                            <span><Image src={phoneIco} alt="Telefoon icoontje"/><h2>06 18 36 56 89</h2></span>
                            <Link href="/afspraak" data-aos="fade-right"><span id="herobtn">Afspraak</span> <Image src={arrowIco} alt="Pijl icoontje"/></Link>
                    </section>
                </div>
            </div>
            <div>
                <div>
                    <section>
                        <Image src={taxiauto} alt="Taxi auto van Mavi Taxi"/>
                    </section>
                    <section>
                        <div>
                            <Image src={vitoIco} alt="Mercedez Benz Vito Icoon"/>
                            <h3 id="heropoint1">Luxe Comfort</h3>
                        </div>
                        <div>
                            <Image src={clockIco} alt="Klok Icoon"/>
                            <h3 id="heropoint2">Veilig en optijd</h3>
                        </div>
                        <div>
                            <Image src={roadIco} alt="Weg Icoon"/>
                            <h3 id="heropoint3">Snel bij locatie</h3>
                        </div>
                        <div>
                            <Image src={appointmentIco} alt="Kalender Icoon"/>
                            <h3 id="heropoint4">Vooraf boeken</h3>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
  }
  
  export default Hero;
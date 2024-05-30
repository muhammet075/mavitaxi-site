import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/pricecalculator.module.css";
import betaalmethodes from "../assets/betaalmethodes.png";

function PriceCalculator() {

      function calculatePrice(){
        const kmAmount = document.querySelector("#kmAmount").value
        let kmPrice = kmAmount * 3.57 + 6.83;
        let totalPrice = kmPrice.toFixed(2);
        document.querySelector("#totalPrice").innerHTML = totalPrice;

        if (kmAmount > 1000){
            let newKm = 50;
            let kmPrice = 999 * 3.57 + 6.83;
            let totalPrice = kmPrice.toFixed(2);

            const kmAmount = document.querySelector("#kmAmount").value = "999"
            document.querySelector("#totalPrice").innerHTML = totalPrice;
        }
    }


    return(      
        <div className={styles.pricecalculator}>  
            <div>
                <section>
                    <h2>Mavi Taxi</h2>
                    <p>Wordt aan gewerkt...</p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    {/* <p>Mavi Taxi is voornamelijk actief in Amsterdam, de Zaanstreek en de omliggende gebieden, waar we bekend staan om onze betrouwbare en comfortabele vervoersdiensten. Onze nette en goed onderhouden voertuigen zorgen ervoor dat uw reis altijd aangenaam verloopt.</p> 
                    <p>Of u nu direct opgehaald wilt worden of een rit voor een later tijdstip wilt plannen, bij ons bent u aan het juiste adres. U kunt ons bereiken door te bellen naar 0618365689 of door een afspraak te maken via de knop hieronder.</p> 
                    <p>Voor uw gemak bieden we ook een handige ritcalculator aan waarmee u een schatting van de ritprijs kunt berekenen. Houd er rekening mee dat deze prijs een schatting is en de uiteindelijke kosten kunnen variëren afhankelijk van verschillende factoren.</p> */}
                    <Link href="/afspraak">Afspraak maken</Link>
                </section>
                <section>
                    <h2 id="calculatortitel2">Bereken Prijs</h2>
                    <label for="kmAmount" id="kmamountlabel"></label>
                    <input onChange={calculatePrice} minlength="1" min="0" max="999" id="kmAmount" type="number" className="kminput" placeholder="Aantal Kilometers" disabled></input>
                    <div>
                        <p id="calculatortext4">Prijs indicatie:</p>
                        <p>€ <span id="totalPrice">0.00</span></p>
                    </div>
                </section>
                <Image src={betaalmethodes} alt="Logos van verschillende betaalmethodes"/>
            </div>
        </div>
    )
  }
  
  export default PriceCalculator;
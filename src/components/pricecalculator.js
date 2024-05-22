import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/pricecalculator.module.css";
import sessionstorage from "sessionstorage";
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
                    <h2 id="calculatortitel1">Taxi T.C.</h2>
                    <p id="calculatortext1">Taxi T.C. is vooral actief in Amsterdam, de Zaanstreek en omstreken! Wij bezorgen u met comfort in onze nette voertuigen.</p> 
                    <p id="calculatortext2">Wilt u direct opgehaald worden? Bel ons dan direct op 0614622099 of maak een afspraak via de onderstaande knop. U kunt ook uw prijs van uw rit berekenen met behulp van de calculator. De genoemde prijs is slechts een schatting van de rit.</p>
                    <p id="calculatortext3">Bij Taxi T.C. kunt u altijd pinnen. U kunt ook contactloos betalen met uw bankpas of mobiel. Wij accepteren ook creditcards, zoals Mastercard, Visa en American Express Card. Ook kunt u met cash geld bij ons betalen.</p>
                    <Link href="/afspraak" id="calculatorbtn">Afspraak maken</Link>
                </section>
                <section>
                    <h2 id="calculatortitel2">Bereken Prijs</h2>
                    <label for="kmAmount" id="kmamountlabel">Aantal Kilometer:</label>
                    <input onChange={calculatePrice} minlength="1" min="0" max="999" id="kmAmount" type="number" className="kminput" placeholder="Kilometers"></input>
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
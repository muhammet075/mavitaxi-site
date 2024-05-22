import { useEffect, useState } from "react";
import { Translate } from "../components/translate";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import DistanceCalculator from "distance-calculator-js";
import styles from "../styles/afspraak.module.css";
import plaatsen from "../../public/plaatsen";
import betaalmethodes from "../assets/betaalmethodes.png";
import autopng from "../assets/autopng.png";
import sklassepng from "../assets/sklassepng.png";
import vitopng from "../assets/vitopng.png";
import arrowIco from "../assets/icons/arrow.png";

export default function Afspraak() {
  const [searchTerm, setSearchTerm] = useState("");

  let uren;
  let minuten;

  function changetime() {
    uren = document.querySelector(".ureninput").value;
    minuten = document.querySelector(".minuteninput").value;
  }

  useEffect(() => {
    document.querySelector(".datepicker").valueAsDate = new Date();

    let resultPlaces = document.querySelectorAll(".resultlist");
    let searchPlaceBar = document.querySelector(".searchinput");
    const resultul = document.querySelector(".resultul");

    searchPlaceBar.addEventListener("click", () => {
      resultul.classList.remove("displaynone");
    });

    for (let i = 0; i < resultPlaces.length; i++) {
      resultPlaces[i].addEventListener("click", () => {
        searchPlaceBar.value = resultPlaces[i].innerHTML;
        resultul.classList.add("displaynone");
      });
    }

    Translate();
  });

  function calculatePrice() {
    let plaats1 = document.querySelector(".ophaalplaats").value;
    let plaats2 = document.querySelector(".searchinput").value;

    let plaatsnaam1;
    let plaatsnaam2;

    let plaatsNamenArray = [];
    let plaatsenData = [plaatsen];
    let totaalKm;
    let newKm;
    let helftKm;

    let normaalprijs;
    let busprijs;
    let luxeprijs;

    let zoekPlaats1;
    let zoekPlaats2;
    let plaats1optie = document.querySelector(".ophaalplaats").value;

    for (let i = 0; i < plaatsen.length; i++) {
      plaatsNamenArray.push(plaatsen[i].city);
    }

    let plaats2optie = plaatsNamenArray.find(
      (item) => item === document.querySelector(".searchinput").value
    );

    for (let i = 0; i < plaatsenData.length; i++) {
      plaatsnaam1 = plaatsenData[i].find((item) => item.city === plaats1optie);
      plaatsnaam2 = plaatsenData[i].find((item) => item.city === plaats2optie);
    }

    try {
      zoekPlaats1 = { lat: plaatsnaam1.lat, long: plaatsnaam1.lng };
      zoekPlaats2 = { lat: plaatsnaam2.lat, long: plaatsnaam2.lng };

      totaalKm = DistanceCalculator.calculate(zoekPlaats1, zoekPlaats2, "km");

      helftKm = totaalKm / 3;
      newKm = totaalKm + helftKm;
    } catch (e) {}

    console.log(plaats1 + " " + plaats2 + " " + newKm);

    normaalprijs = newKm * 3.11;
    busprijs = newKm * 3.46;
    luxeprijs = newKm * 3.46;

    if (plaats1.length > 1 && plaats2.length > 1) {
      document.querySelector(".normaleprijs").innerHTML =
        normaalprijs.toFixed(2);
      document.querySelector(".busprijs").innerHTML = busprijs.toFixed(2);
      document.querySelector(".luxeprijs").innerHTML = luxeprijs.toFixed(2);

      document
        .querySelector(".normaleafspraak")
        .classList.remove("displaynone");
      document.querySelector(".busafspraak").classList.remove("displaynone");
      document.querySelector(".luxeafspraak").classList.remove("displaynone");
    }
  }

  function normaleafspraak() {
    let message =
      "NIEUWE AFSPRAAK VOOR NORMALE AUTO%0a" +
      "Prijs:%20€" +
      document.querySelector(".normaleprijs").innerHTML +
      "%0a" +
      "Van:%20" +
      document.querySelector(".ophaalplaats").value +
      "%0a" +
      "Naar:%20" +
      document.querySelector(".searchinput").value +
      "%0a" +
      "Datum:%20" +
      document.querySelector(".datepicker").value +
      "%0a" +
      "Tijd:%20" +
      uren +
      ":" +
      minuten +
      "%20";
    window.location = "https://wa.me/?phone=31614622099&text=" + message;
  }

  function busafspraak() {
    let message =
      "NIEUWE AFSPRAAK VOOR BUS/VAN%0a" +
      "Prijs:%20€" +
      document.querySelector(".busprijs").innerHTML +
      "%0a" +
      "Van:%20" +
      document.querySelector(".ophaalplaats").value +
      "%0a" +
      "Naar:%20" +
      document.querySelector(".searchinput").value +
      "%0a" +
      "Datum:%20" +
      document.querySelector(".datepicker").value +
      "%0a" +
      "Tijd:%20" +
      uren +
      ":" +
      minuten +
      "%20";
    window.location = "https://wa.me/?phone=31614622099&text=" + message;
  }

  function luxeafspraak() {
    let message =
      "NIEUWE AFSPRAAK VOOR LUXE AUTO%0a" +
      "Prijs:%20€" +
      document.querySelector(".luxeprijs").innerHTML +
      "%0a" +
      "Van:%20" +
      document.querySelector(".ophaalplaats").value +
      "%0a" +
      "Naar:%20" +
      document.querySelector(".searchinput").value +
      "%0a" +
      "Datum:%20" +
      document.querySelector(".datepicker").value +
      "%0a" +
      "Tijd:%20" +
      uren +
      ":" +
      minuten +
      "%20";
    window.location = "https://wa.me/?phone=31614622099&text=" + message;
  }

  return (
    <>
      <Head>
        <title>Taxi T.C. - Afspraak</title>
      </Head>

      <div className={styles.afspraak}>
        <div>
          <div>
            <h1 id='afspraaktitle'>Afspraak</h1>
            <p id='afspraaktext1'>
              Maak een afspraak door de formulier hier beneden in te vullen. Na
              dat u de afspraak bevesitgt heeft worden de exacte ophaal en
              aflever adressen bij u gevraagd. De minimale prijs van een rit is
              altijd €25,-
            </p>
          </div>

          <section>
            <div>
              <h2 id='afspraakvan'>Van</h2>
              <div>
                <select className='ophaalplaats' onChange={calculatePrice}>
                  <option disabled selected value id='firstcity'>
                    {" "}
                    Kies een plaats
                  </option>
                  <option>Amsterdam</option>
                  <option>Zaandam</option>
                  <option>Amstelveen</option>
                  <option>Weesp</option>
                  <option>Zwanenburg</option>
                  <option>Oostzaan</option>
                  <option>Haarlem</option>
                  <option>Hoofddorp</option>
                  <option>Wormerveer</option>
                  <option>Krommenie</option>
                  <option>Assendelft</option>
                  <option>Badhoevedorp</option>
                  <option>Oostzaan</option>
                  <option>Landsmeer</option>
                </select>
                <Image src={arrowIco} className='vanarrowico' />
              </div>
            </div>

            <div>
              <h2 id='afspraaknaar'>Naar</h2>
              <div>
                <input
                  className='searchinput'
                  type='text'
                  placeholder='Typ een plaats in'
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
              <ul className='resultul'>
                {plaatsen
                  .filter((val) => {
                    if (searchTerm == "") {
                      return null;
                    } else if (
                      val.city.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val, key) => {
                    return (
                      <li key={key}>
                        <button onClick={calculatePrice} className='resultlist'>
                          {val.city}
                        </button>
                      </li>
                    );
                  })}
              </ul>
              <section className='searchresults'></section>
            </div>
          </section>

          <section>
            <h2 id='afspraakdatum'>Datum en tijdstip</h2>

            <section>
              <div>
                <input
                  type='date'
                  className='datepicker'
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div>
                <select className='ureninput' onChange={changetime}>
                  <option value={17}>17</option>
                  <option value={18}>18</option>
                  <option value={19}>19</option>
                  <option value={20}>20</option>
                  <option value={21}>21</option>
                  <option value={22}>22</option>
                  <option value={23}>23</option>
                  <option value={0}>00</option>
                  <option value={1}>01</option>
                </select>

                <p>:</p>

                <select className='minuteninput' onChange={changetime}>
                  <option value={0}>00</option>
                  <option value={15}>15</option>
                  <option value={30}>30</option>
                  <option value={45}>45</option>
                </select>

                <p id='afspraaktijden'>
                  Beschikbare tijden vanaf 17:00 tot en met 02:00
                </p>
              </div>
            </section>
          </section>
        </div>

        <div>
          <p id='afspraaktext2'>
            De prijzen hieronder zijn schattingen van de rit. De prijs kan met
            enkele euro's oplopen of aflopen. Dat hangt af van de ophaalstraat
            en afleverstraat.
          </p>
          <p id='afspraaktext3'>
            Om uw afspraak te bevestigen kiest u uw gewenste soort auto en zal
            doorverwezen worden naar WhatsApp. Na dat uw bericht succesvol
            verstuurd is, krijgt u een Tikkie als aanbetaling van de helft van
            de prijs wat hier onder per auto is opgenoemd. Dan is uw afspraak
            met succes geregistreerd en stuurt u uw ophaal- en aflever adres
            door.
          </p>

          <div>
            <section>
              <Image src={autopng} alt='Normaal Auto' />
              <h2 id='afspraakauto1'>Normale Auto</h2>
              <p>(E-Klasse)</p>
              <p id='prijs1'>Prijs:</p>
              <p>
                &euro; <span className='normaleprijs'>0.00</span>
              </p>
              <button
                className='displaynone normaleafspraak'
                id='afspraak1'
                onClick={normaleafspraak}
              >
                Afspraak
              </button>
            </section>

            <section>
              <Image src={vitopng} alt='Vito Auto' />
              <h2 id='afspraakauto2'>Bus / Van</h2>
              <p>(Vito)</p>
              <p id='prijs2'>Prijs:</p>
              <p>
                &euro; <span className='busprijs'>0.00</span>
              </p>
              <button
                className='displaynone busafspraak'
                id='afspraak2'
                onClick={busafspraak}
              >
                Afspraak
              </button>
            </section>

            <section>
              <Image src={sklassepng} alt='Limo Auto' />
              <h2 id='afspraakauto3'>Luxe Auto</h2>
              <p>(S-Klasse / 7-Serie)</p>
              <p id='prijs3'>Prijs:</p>
              <p>
                &euro; <span className='luxeprijs'>0.00</span>
              </p>
              <button
                className='displaynone luxeafspraak'
                id='afspraak3'
                onClick={luxeafspraak}
              >
                Afspraak
              </button>
            </section>
          </div>
          <Image src={betaalmethodes} alt='Betaalmethodes' />
        </div>
      </div>
    </>
  );
}


import sessionstorage from "sessionstorage";
import translations from "../../public/translations";


export function Translate(){

    const language = sessionstorage.getItem("language");
    // console.log(language);
    
    if (language === "nl"){

        document.querySelector("#nav1").innerHTML = translations[0].nl[0].nav1;
        document.querySelector("#nav2").innerHTML = translations[0].nl[0].nav2;
        document.querySelector("#nav3").innerHTML = translations[0].nl[0].nav3;
        document.querySelector("#nav4").innerHTML = translations[0].nl[0].nav4;
        document.querySelector("#nav5").innerHTML = translations[0].nl[0].nav5;

        try{
            document.querySelector("#herotitel").innerHTML = translations[0].nl[0].herotitel;
            document.querySelector("#heropoint1").innerHTML = translations[0].nl[0].heropoint1;
            document.querySelector("#heropoint2").innerHTML = translations[0].nl[0].heropoint2;
            document.querySelector("#heropoint3").innerHTML = translations[0].nl[0].heropoint3;
            document.querySelector("#heropoint4").innerHTML = translations[0].nl[0].heropoint4;
            document.querySelector("#herobtn").innerHTML = translations[0].nl[0].herobtn;
        } catch(e){} 

        try{
            document.querySelector("#calculatortitel1").innerHTML = translations[0].nl[0].calculatortitel1;
            document.querySelector("#calculatortitel2").innerHTML = translations[0].nl[0].calculatortitel2;
            document.querySelector("#calculatortext1").innerHTML = translations[0].nl[0].calculatortext1;
            document.querySelector("#calculatortext2").innerHTML = translations[0].nl[0].calculatortext2;
            document.querySelector("#calculatortext3").innerHTML = translations[0].nl[0].calculatortext3;
            document.querySelector("#calculatortext4").innerHTML = translations[0].nl[0].calculatortext4;
            document.querySelector("#calculatorbtn").innerHTML = translations[0].nl[0].calculatorbtn;
            document.querySelector("#kmamountlabel").innerHTML = translations[0].nl[0].kmamountlabel;
        } catch(e){} 

        try{
            document.querySelector("#footertitel1").innerHTML = translations[0].nl[0].footertitel1;
            document.querySelector("#footertitel2").innerHTML = translations[0].nl[0].footertitel2;
            document.querySelector("#footerlink1").innerHTML = translations[0].nl[0].footerlink1;
            document.querySelector("#footerlink2").innerHTML = translations[0].nl[0].footerlink2;
            document.querySelector("#footerlink3").innerHTML = translations[0].nl[0].footerlink3;
            document.querySelector("#footerlink4").innerHTML = translations[0].nl[0].footerlink4;
            document.querySelector("#footerlink5").innerHTML = translations[0].nl[0].footerlink5;
            document.querySelector("#footercopyright").innerHTML = translations[0].nl[0].footercopyright;
        } catch(e){}

        try{
            document.querySelector("#prijstext").innerHTML = translations[0].nl[0].prijstext;
            document.querySelector("#prijscontent").innerHTML = translations[0].nl[0].prijscontent;
        } catch(e){}

        try{
            document.querySelector("#overonstext").innerHTML = translations[0].nl[0].overonstext;
            document.querySelector("#overonscontent1").innerHTML = translations[0].nl[0].overonscontent1;    
            document.querySelector("#overonscontent2").innerHTML = translations[0].nl[0].overonscontent2;    
        } catch(e){}

        try{
            document.querySelector("#rijgebiedentext").innerHTML = translations[0].nl[0].rijgebiedentext;
            document.querySelector("#rijgebiedencontent1").innerHTML = translations[0].nl[0].rijgebiedencontent1;   
            document.querySelector("#rijgebiedencontent2").innerHTML = translations[0].nl[0].rijgebiedencontent2; 
        } catch(e){}

        try{
            document.querySelector("#afspraaktext").innerHTML = translations[0].nl[0].afspraaktext;
            document.querySelector("#afspraakcontent").innerHTML = translations[0].nl[0].afspraakcontent;    
        } catch(e){}

        try{
            document.querySelector("#amsterdam1").innerHTML = translations[0].nl[0].amsterdam1;
            document.querySelector("#amsterdam2").innerHTML = translations[0].nl[0].amsterdam2;
            document.querySelector("#amsterdam3").innerHTML = translations[0].nl[0].amsterdam3;
        }catch(e){}

        try{
            document.querySelector("#amstelveen1").innerHTML = translations[0].nl[0].amstelveen1;
            document.querySelector("#amstelveen2").innerHTML = translations[0].nl[0].amstelveen2;
            document.querySelector("#amstelveen3").innerHTML = translations[0].nl[0].amstelveen3;
        }catch(e){}

        try{
            document.querySelector("#zaandam1").innerHTML = translations[0].nl[0].zaandam1;
            document.querySelector("#zaandam2").innerHTML = translations[0].nl[0].zaandam2;
            document.querySelector("#zaandam3").innerHTML = translations[0].nl[0].zaandam3;
        }catch(e){}

        try{
            document.querySelector("#diemen1").innerHTML = translations[0].nl[0].diemen1;
            document.querySelector("#diemen2").innerHTML = translations[0].nl[0].diemen2;
            document.querySelector("#diemen3").innerHTML = translations[0].nl[0].diemen3;
        }catch(e){}

        try{
            document.querySelector("#hoofddorp1").innerHTML = translations[0].nl[0].hoofddorp1;
            document.querySelector("#hoofddorp2").innerHTML = translations[0].nl[0].hoofddorp2;
            document.querySelector("#hoofddorp3").innerHTML = translations[0].nl[0].hoofddorp3;
        }catch(e){}

        try{
            document.querySelector("#haarlem1").innerHTML = translations[0].nl[0].haarlem1;
            document.querySelector("#haarlem2").innerHTML = translations[0].nl[0].haarlem2;
            document.querySelector("#haarlem3").innerHTML = translations[0].nl[0].haarlem3;
        }catch(e){}

        try{
            document.querySelector("#zaandijk1").innerHTML = translations[0].nl[0].zaandijk1;
            document.querySelector("#zaandijk2").innerHTML = translations[0].nl[0].zaandijk2;
            document.querySelector("#zaandijk3").innerHTML = translations[0].nl[0].zaandijk3;
        }catch(e){}

        try{
            document.querySelector("#krommenie1").innerHTML = translations[0].nl[0].krommenie1;
            document.querySelector("#krommenie2").innerHTML = translations[0].nl[0].krommenie2;
            document.querySelector("#krommenie3").innerHTML = translations[0].nl[0].krommenie3;
        }catch(e){}

        try{
            document.querySelector("#assendelft1").innerHTML = translations[0].nl[0].assendelft1;
            document.querySelector("#assendelft2").innerHTML = translations[0].nl[0].assendelft2;
            document.querySelector("#assendelft3").innerHTML = translations[0].nl[0].assendelft3;
        }catch(e){}

        try{
            document.querySelector("#wormerveer1").innerHTML = translations[0].nl[0].wormerveer1;
            document.querySelector("#wormerveer2").innerHTML = translations[0].nl[0].wormerveer2;
            document.querySelector("#wormerveer3").innerHTML = translations[0].nl[0].wormerveer3;
        }catch(e){}

        try{
            document.querySelector("#oostzaan1").innerHTML = translations[0].nl[0].oostzaan1;
            document.querySelector("#oostzaan2").innerHTML = translations[0].nl[0].oostzaan2;
            document.querySelector("#oostzaan3").innerHTML = translations[0].nl[0].oostzaan3;
        }catch(e){}

        try{
            document.querySelector("#afspraaktitle").innerHTML = translations[0].nl[0].afspraaktitle;
            document.querySelector("#afspraaktext1").innerHTML = translations[0].nl[0].afspraaktext1;
            document.querySelector("#afspraakvan").innerHTML = translations[0].nl[0].afspraakvan;
            document.querySelector("#afspraaknaar").innerHTML = translations[0].nl[0].afspraaknaar;
            document.querySelector("#afspraakdatum").innerHTML = translations[0].nl[0].afspraakdatum;
            document.querySelector("#afspraaktijden").innerHTML = translations[0].nl[0].afspraaktijden;
            document.querySelector("#afspraaktext2").innerHTML = translations[0].nl[0].afspraaktext2;
            document.querySelector("#afspraaktext3").innerHTML = translations[0].nl[0].afspraaktext3;
            document.querySelector("#afspraakauto1").innerHTML = translations[0].nl[0].afspraakauto1;
            document.querySelector("#prijs1").innerHTML = translations[0].nl[0].prijs1;
            document.querySelector("#afspraak1").innerHTML = translations[0].nl[0].afspraak1;
            document.querySelector("#afspraakauto2").innerHTML = translations[0].nl[0].afspraakauto2;
            document.querySelector("#prijs2").innerHTML = translations[0].nl[0].prijs2;
            document.querySelector("#afspraak2").innerHTML = translations[0].nl[0].afspraak2;
            document.querySelector("#afspraakauto3").innerHTML = translations[0].nl[0].afspraakauto3;
            document.querySelector("#prijs3").innerHTML = translations[0].nl[0].prijs3;
            document.querySelector("#afspraak3").innerHTML = translations[0].nl[0].afspraak3;
            document.querySelector("#firstcity").innerHTML = translations[0].nl[0].firstcity;
            document.querySelector(".searchinput").placeholder = translations[0].nl[0].searchinput;
        }catch(e){}

    } else if (language === "en") {

        try{
            document.querySelector("#nav1").innerHTML = translations[0].en[0].nav1;
            document.querySelector("#nav2").innerHTML = translations[0].en[0].nav2;
            document.querySelector("#nav3").innerHTML = translations[0].en[0].nav3;
            document.querySelector("#nav4").innerHTML = translations[0].en[0].nav4;
            document.querySelector("#nav5").innerHTML = translations[0].en[0].nav5;
        } catch(e){} 

        try{
            document.querySelector("#herotitel").innerHTML = translations[0].en[0].herotitel;
            document.querySelector("#heropoint1").innerHTML = translations[0].en[0].heropoint1;
            document.querySelector("#heropoint2").innerHTML = translations[0].en[0].heropoint2;
            document.querySelector("#heropoint3").innerHTML = translations[0].en[0].heropoint3;
            document.querySelector("#heropoint4").innerHTML = translations[0].en[0].heropoint4;
            document.querySelector("#herobtn").innerHTML = translations[0].en[0].herobtn;
        } catch(e){}

        try{
            document.querySelector("#calculatortitel1").innerHTML = translations[0].en[0].calculatortitel1;
            document.querySelector("#calculatortitel2").innerHTML = translations[0].en[0].calculatortitel2;
            document.querySelector("#calculatortext1").innerHTML = translations[0].en[0].calculatortext1;
            document.querySelector("#calculatortext2").innerHTML = translations[0].en[0].calculatortext2;
            document.querySelector("#calculatortext3").innerHTML = translations[0].en[0].calculatortext3;
            document.querySelector("#calculatortext4").innerHTML = translations[0].en[0].calculatortext4;
            document.querySelector("#calculatorbtn").innerHTML = translations[0].en[0].calculatorbtn;
            document.querySelector("#kmamountlabel").innerHTML = translations[0].en[0].kmamountlabel;
        } catch(e){} 

        try{
            document.querySelector("#footertitel1").innerHTML = translations[0].en[0].footertitel1;
            document.querySelector("#footertitel2").innerHTML = translations[0].en[0].footertitel2;
            document.querySelector("#footerlink1").innerHTML = translations[0].en[0].footerlink1;
            document.querySelector("#footerlink2").innerHTML = translations[0].en[0].footerlink2;
            document.querySelector("#footerlink3").innerHTML = translations[0].en[0].footerlink3;
            document.querySelector("#footerlink4").innerHTML = translations[0].en[0].footerlink4;
            document.querySelector("#footerlink5").innerHTML = translations[0].en[0].footerlink5;
            document.querySelector("#footercopyright").innerHTML = translations[0].en[0].footercopyright;
        } catch(e){}

        try{
            document.querySelector("#prijstext").innerHTML = translations[0].en[0].prijstext;
            document.querySelector("#prijscontent").innerHTML = translations[0].en[0].prijscontent;
        } catch(e){}

        try{
            document.querySelector("#overonstext").innerHTML = translations[0].en[0].overonstext;
            document.querySelector("#overonscontent1").innerHTML = translations[0].en[0].overonscontent1;    
            document.querySelector("#overonscontent2").innerHTML = translations[0].en[0].overonscontent2;    
        } catch(e){}

        try{
            document.querySelector("#rijgebiedentext").innerHTML = translations[0].en[0].rijgebiedentext;
            document.querySelector("#rijgebiedencontent1").innerHTML = translations[0].en[0].rijgebiedencontent1;    
            document.querySelector("#rijgebiedencontent2").innerHTML = translations[0].en[0].rijgebiedencontent2;
        } catch(e){}

        try{
            document.querySelector("#afspraaktext").innerHTML = translations[0].en[0].afspraaktext;
            document.querySelector("#afspraakcontent").innerHTML = translations[0].en[0].afspraakcontent;    
        } catch(e){}

        try{
            document.querySelector("#amsterdam1").innerHTML = translations[0].en[0].amsterdam1;
            document.querySelector("#amsterdam2").innerHTML = translations[0].en[0].amsterdam2;
            document.querySelector("#amsterdam3").innerHTML = translations[0].en[0].amsterdam3;
        }catch(e){}

        try{
            document.querySelector("#amstelveen1").innerHTML = translations[0].en[0].amstelveen1;
            document.querySelector("#amstelveen2").innerHTML = translations[0].en[0].amstelveen2;
            document.querySelector("#amstelveen3").innerHTML = translations[0].en[0].amstelveen3;
        }catch(e){}

        try{
            document.querySelector("#zaandam1").innerHTML = translations[0].en[0].zaandam1;
            document.querySelector("#zaandam2").innerHTML = translations[0].en[0].zaandam2;
            document.querySelector("#zaandam3").innerHTML = translations[0].en[0].zaandam3;
        }catch(e){}

        try{
            document.querySelector("#diemen1").innerHTML = translations[0].en[0].diemen1;
            document.querySelector("#diemen2").innerHTML = translations[0].en[0].diemen2;
            document.querySelector("#diemen3").innerHTML = translations[0].en[0].diemen3;
        }catch(e){}

        try{
            document.querySelector("#hoofddorp1").innerHTML = translations[0].en[0].hoofddorp1;
            document.querySelector("#hoofddorp2").innerHTML = translations[0].en[0].hoofddorp2;
            document.querySelector("#hoofddorp3").innerHTML = translations[0].en[0].hoofddorp3;
        }catch(e){}

        try{
            document.querySelector("#haarlem1").innerHTML = translations[0].en[0].haarlem1;
            document.querySelector("#haarlem2").innerHTML = translations[0].en[0].haarlem2;
            document.querySelector("#haarlem3").innerHTML = translations[0].en[0].haarlem3;
        }catch(e){}

        try{
            document.querySelector("#zaandijk1").innerHTML = translations[0].en[0].zaandijk1;
            document.querySelector("#zaandijk2").innerHTML = translations[0].en[0].zaandijk2;
            document.querySelector("#zaandijk3").innerHTML = translations[0].en[0].zaandijk3;
        }catch(e){}

        try{
            document.querySelector("#krommenie1").innerHTML = translations[0].en[0].krommenie1;
            document.querySelector("#krommenie2").innerHTML = translations[0].en[0].krommenie2;
            document.querySelector("#krommenie3").innerHTML = translations[0].en[0].krommenie3;
        }catch(e){}

        try{
            document.querySelector("#assendelft1").innerHTML = translations[0].en[0].assendelft1;
            document.querySelector("#assendelft2").innerHTML = translations[0].en[0].assendelft2;
            document.querySelector("#assendelft3").innerHTML = translations[0].en[0].assendelft3;
        }catch(e){}

        try{
            document.querySelector("#wormerveer1").innerHTML = translations[0].en[0].wormerveer1;
            document.querySelector("#wormerveer2").innerHTML = translations[0].en[0].wormerveer2;
            document.querySelector("#wormerveer3").innerHTML = translations[0].en[0].wormerveer3;
        }catch(e){}

        try{
            document.querySelector("#oostzaan1").innerHTML = translations[0].en[0].oostzaan1;
            document.querySelector("#oostzaan2").innerHTML = translations[0].en[0].oostzaan2;
            document.querySelector("#oostzaan3").innerHTML = translations[0].en[0].oostzaan3;
        }catch(e){}

        try{
            document.querySelector("#afspraaktitle").innerHTML = translations[0].en[0].afspraaktitle;
            document.querySelector("#afspraaktext1").innerHTML = translations[0].en[0].afspraaktext1;
            document.querySelector("#afspraakvan").innerHTML = translations[0].en[0].afspraakvan;
            document.querySelector("#afspraaknaar").innerHTML = translations[0].en[0].afspraaknaar;
            document.querySelector("#afspraakdatum").innerHTML = translations[0].en[0].afspraakdatum;
            document.querySelector("#afspraaktijden").innerHTML = translations[0].en[0].afspraaktijden;
            document.querySelector("#afspraaktext2").innerHTML = translations[0].en[0].afspraaktext2;
            document.querySelector("#afspraaktext3").innerHTML = translations[0].en[0].afspraaktext3;
            document.querySelector("#afspraakauto1").innerHTML = translations[0].en[0].afspraakauto1;
            document.querySelector("#prijs1").innerHTML = translations[0].en[0].prijs1;
            document.querySelector("#afspraak1").innerHTML = translations[0].en[0].afspraak1;
            document.querySelector("#afspraakauto2").innerHTML = translations[0].en[0].afspraakauto2;
            document.querySelector("#prijs2").innerHTML = translations[0].en[0].prijs2;
            document.querySelector("#afspraak2").innerHTML = translations[0].en[0].afspraak2;
            document.querySelector("#afspraakauto3").innerHTML = translations[0].en[0].afspraakauto3;
            document.querySelector("#prijs3").innerHTML = translations[0].en[0].prijs3;
            document.querySelector("#afspraak3").innerHTML = translations[0].en[0].afspraak3;
            document.querySelector("#firstcity").innerHTML = translations[0].en[0].firstcity;
            document.querySelector(".searchinput").placeholder = translations[0].en[0].searchinput;
        }catch(e){}

    } else if (language === "es") {
        try{
            document.querySelector("#nav1").innerHTML = translations[0].es[0].nav1;
            document.querySelector("#nav2").innerHTML = translations[0].es[0].nav2;
            document.querySelector("#nav3").innerHTML = translations[0].es[0].nav3;
            document.querySelector("#nav4").innerHTML = translations[0].es[0].nav4;
            document.querySelector("#nav5").innerHTML = translations[0].es[0].nav5;
        } catch(e){} 

        try{
            document.querySelector("#herotitel").innerHTML = translations[0].es[0].herotitel;
            document.querySelector("#heropoint1").innerHTML = translations[0].es[0].heropoint1;
            document.querySelector("#heropoint2").innerHTML = translations[0].es[0].heropoint2;
            document.querySelector("#heropoint3").innerHTML = translations[0].es[0].heropoint3;
            document.querySelector("#heropoint4").innerHTML = translations[0].es[0].heropoint4;
            document.querySelector("#herobtn").innerHTML = translations[0].es[0].herobtn;
        } catch(e){}

        try{
            document.querySelector("#calculatortitel1").innerHTML = translations[0].es[0].calculatortitel1;
            document.querySelector("#calculatortitel2").innerHTML = translations[0].es[0].calculatortitel2;
            document.querySelector("#calculatortext1").innerHTML = translations[0].es[0].calculatortext1;
            document.querySelector("#calculatortext2").innerHTML = translations[0].es[0].calculatortext2;
            document.querySelector("#calculatortext3").innerHTML = translations[0].es[0].calculatortext3;
            document.querySelector("#calculatortext4").innerHTML = translations[0].es[0].calculatortext4;
            document.querySelector("#calculatorbtn").innerHTML = translations[0].es[0].calculatorbtn;
            document.querySelector("#kmamountlabel").innerHTML = translations[0].es[0].kmamountlabel;
        } catch(e){} 

        try{
            document.querySelector("#footertitel1").innerHTML = translations[0].es[0].footertitel1;
            document.querySelector("#footertitel2").innerHTML = translations[0].es[0].footertitel2;
            document.querySelector("#footerlink1").innerHTML = translations[0].es[0].footerlink1;
            document.querySelector("#footerlink2").innerHTML = translations[0].es[0].footerlink2;
            document.querySelector("#footerlink3").innerHTML = translations[0].es[0].footerlink3;
            document.querySelector("#footerlink4").innerHTML = translations[0].es[0].footerlink4;
            document.querySelector("#footerlink5").innerHTML = translations[0].es[0].footerlink5;
            document.querySelector("#footercopyright").innerHTML = translations[0].es[0].footercopyright;
        } catch(e){}

        try{
            document.querySelector("#prijstext").innerHTML = translations[0].es[0].prijstext;
            document.querySelector("#prijscontent").innerHTML = translations[0].es[0].prijscontent;
        } catch(e){}

        try{
            document.querySelector("#overonstext").innerHTML = translations[0].es[0].overonstext;
            document.querySelector("#overonscontent1").innerHTML = translations[0].es[0].overonscontent1;    
            document.querySelector("#overonscontent2").innerHTML = translations[0].es[0].overonscontent2;    
        } catch(e){}

        try{
            document.querySelector("#rijgebiedentext").innerHTML = translations[0].es[0].rijgebiedentext;
            document.querySelector("#rijgebiedencontent1").innerHTML = translations[0].es[0].rijgebiedencontent1;    
            document.querySelector("#rijgebiedencontent2").innerHTML = translations[0].es[0].rijgebiedencontent2;
        } catch(e){}

        try{
            document.querySelector("#afspraaktext").innerHTML = translations[0].es[0].afspraaktext;
            document.querySelector("#afspraakcontent").innerHTML = translations[0].es[0].afspraakcontent;    
        } catch(e){}

        try{
            document.querySelector("#amsterdam1").innerHTML = translations[0].es[0].amsterdam1;
            document.querySelector("#amsterdam2").innerHTML = translations[0].es[0].amsterdam2;
            document.querySelector("#amsterdam3").innerHTML = translations[0].es[0].amsterdam3;
        }catch(e){}

        try{
            document.querySelector("#amstelveen1").innerHTML = translations[0].es[0].amstelveen1;
            document.querySelector("#amstelveen2").innerHTML = translations[0].es[0].amstelveen2;
            document.querySelector("#amstelveen3").innerHTML = translations[0].es[0].amstelveen3;
        }catch(e){}

        try{
            document.querySelector("#zaandam1").innerHTML = translations[0].es[0].zaandam1;
            document.querySelector("#zaandam2").innerHTML = translations[0].es[0].zaandam2;
            document.querySelector("#zaandam3").innerHTML = translations[0].es[0].zaandam3;
        }catch(e){}

        try{
            document.querySelector("#diemen1").innerHTML = translations[0].es[0].diemen1;
            document.querySelector("#diemen2").innerHTML = translations[0].es[0].diemen2;
            document.querySelector("#diemen3").innerHTML = translations[0].es[0].diemen3;
        }catch(e){}

        try{
            document.querySelector("#hoofddorp1").innerHTML = translations[0].es[0].hoofddorp1;
            document.querySelector("#hoofddorp2").innerHTML = translations[0].es[0].hoofddorp2;
            document.querySelector("#hoofddorp3").innerHTML = translations[0].es[0].hoofddorp3;
        }catch(e){}

        try{
            document.querySelector("#haarlem1").innerHTML = translations[0].es[0].haarlem1;
            document.querySelector("#haarlem2").innerHTML = translations[0].es[0].haarlem2;
            document.querySelector("#haarlem3").innerHTML = translations[0].es[0].haarlem3;
        }catch(e){}

        try{
            document.querySelector("#zaandijk1").innerHTML = translations[0].es[0].zaandijk1;
            document.querySelector("#zaandijk2").innerHTML = translations[0].es[0].zaandijk2;
            document.querySelector("#zaandijk3").innerHTML = translations[0].es[0].zaandijk3;
        }catch(e){}

        try{
            document.querySelector("#krommenie1").innerHTML = translations[0].es[0].krommenie1;
            document.querySelector("#krommenie2").innerHTML = translations[0].es[0].krommenie2;
            document.querySelector("#krommenie3").innerHTML = translations[0].es[0].krommenie3;
        }catch(e){}

        try{
            document.querySelector("#assendelft1").innerHTML = translations[0].es[0].assendelft1;
            document.querySelector("#assendelft2").innerHTML = translations[0].es[0].assendelft2;
            document.querySelector("#assendelft3").innerHTML = translations[0].es[0].assendelft3;
        }catch(e){}

        try{
            document.querySelector("#wormerveer1").innerHTML = translations[0].es[0].wormerveer1;
            document.querySelector("#wormerveer2").innerHTML = translations[0].es[0].wormerveer2;
            document.querySelector("#wormerveer3").innerHTML = translations[0].es[0].wormerveer3;
        }catch(e){}

        try{
            document.querySelector("#oostzaan1").innerHTML = translations[0].es[0].oostzaan1;
            document.querySelector("#oostzaan2").innerHTML = translations[0].es[0].oostzaan2;
            document.querySelector("#oostzaan3").innerHTML = translations[0].es[0].oostzaan3;
        }catch(e){}

        try{
            document.querySelector("#afspraaktitle").innerHTML = translations[0].es[0].afspraaktitle;
            document.querySelector("#afspraaktext1").innerHTML = translations[0].es[0].afspraaktext1;
            document.querySelector("#afspraakvan").innerHTML = translations[0].es[0].afspraakvan;
            document.querySelector("#afspraaknaar").innerHTML = translations[0].es[0].afspraaknaar;
            document.querySelector("#afspraakdatum").innerHTML = translations[0].es[0].afspraakdatum;
            document.querySelector("#afspraaktijden").innerHTML = translations[0].es[0].afspraaktijden;
            document.querySelector("#afspraaktext2").innerHTML = translations[0].es[0].afspraaktext2;
            document.querySelector("#afspraaktext3").innerHTML = translations[0].es[0].afspraaktext3;
            document.querySelector("#afspraakauto1").innerHTML = translations[0].es[0].afspraakauto1;
            document.querySelector("#prijs1").innerHTML = translations[0].es[0].prijs1;
            document.querySelector("#afspraak1").innerHTML = translations[0].es[0].afspraak1;
            document.querySelector("#afspraakauto2").innerHTML = translations[0].es[0].afspraakauto2;
            document.querySelector("#prijs2").innerHTML = translations[0].es[0].prijs2;
            document.querySelector("#afspraak2").innerHTML = translations[0].es[0].afspraak2;
            document.querySelector("#afspraakauto3").innerHTML = translations[0].es[0].afspraakauto3;
            document.querySelector("#prijs3").innerHTML = translations[0].es[0].prijs3;
            document.querySelector("#afspraak3").innerHTML = translations[0].es[0].afspraak3;
            document.querySelector("#firstcity").innerHTML = translations[0].es[0].firstcity;
            document.querySelector(".searchinput").placeholder = translations[0].es[0].searchinput;
        }catch(e){}

    } else if (language === "fr") {
        try{
            document.querySelector("#nav1").innerHTML = translations[0].fr[0].nav1;
            document.querySelector("#nav2").innerHTML = translations[0].fr[0].nav2;
            document.querySelector("#nav3").innerHTML = translations[0].fr[0].nav3;
            document.querySelector("#nav4").innerHTML = translations[0].fr[0].nav4;
            document.querySelector("#nav5").innerHTML = translations[0].fr[0].nav5;
        } catch(e){} 

        try{
            document.querySelector("#herotitel").innerHTML = translations[0].fr[0].herotitel;
            document.querySelector("#heropoint1").innerHTML = translations[0].fr[0].heropoint1;
            document.querySelector("#heropoint2").innerHTML = translations[0].fr[0].heropoint2;
            document.querySelector("#heropoint3").innerHTML = translations[0].fr[0].heropoint3;
            document.querySelector("#heropoint4").innerHTML = translations[0].fr[0].heropoint4;
            document.querySelector("#herobtn").innerHTML = translations[0].fr[0].herobtn;
        } catch(e){}

        try{
            document.querySelector("#calculatortitel1").innerHTML = translations[0].fr[0].calculatortitel1;
            document.querySelector("#calculatortitel2").innerHTML = translations[0].fr[0].calculatortitel2;
            document.querySelector("#calculatortext1").innerHTML = translations[0].fr[0].calculatortext1;
            document.querySelector("#calculatortext2").innerHTML = translations[0].fr[0].calculatortext2;
            document.querySelector("#calculatortext3").innerHTML = translations[0].fr[0].calculatortext3;
            document.querySelector("#calculatortext4").innerHTML = translations[0].fr[0].calculatortext4;
            document.querySelector("#calculatorbtn").innerHTML = translations[0].fr[0].calculatorbtn;
            document.querySelector("#kmamountlabel").innerHTML = translations[0].fr[0].kmamountlabel;
        } catch(e){} 

        try{
            document.querySelector("#footertitel1").innerHTML = translations[0].fr[0].footertitel1;
            document.querySelector("#footertitel2").innerHTML = translations[0].fr[0].footertitel2;
            document.querySelector("#footerlink1").innerHTML = translations[0].fr[0].footerlink1;
            document.querySelector("#footerlink2").innerHTML = translations[0].fr[0].footerlink2;
            document.querySelector("#footerlink3").innerHTML = translations[0].fr[0].footerlink3;
            document.querySelector("#footerlink4").innerHTML = translations[0].fr[0].footerlink4;
            document.querySelector("#footerlink5").innerHTML = translations[0].fr[0].footerlink5;
            document.querySelector("#footercopyright").innerHTML = translations[0].fr[0].footercopyright;
        } catch(e){}

        try{
            document.querySelector("#prijstext").innerHTML = translations[0].fr[0].prijstext;
            document.querySelector("#prijscontent").innerHTML = translations[0].fr[0].prijscontent;
        } catch(e){}

        try{
            document.querySelector("#overonstext").innerHTML = translations[0].fr[0].overonstext;
            document.querySelector("#overonscontent1").innerHTML = translations[0].fr[0].overonscontent1;    
            document.querySelector("#overonscontent2").innerHTML = translations[0].fr[0].overonscontent2;    
        } catch(e){}

        try{
            document.querySelector("#rijgebiedentext").innerHTML = translations[0].fr[0].rijgebiedentext;
            document.querySelector("#rijgebiedencontent1").innerHTML = translations[0].fr[0].rijgebiedencontent1;    
            document.querySelector("#rijgebiedencontent2").innerHTML = translations[0].fr[0].rijgebiedencontent2;
        } catch(e){}

        try{
            document.querySelector("#afspraaktext").innerHTML = translations[0].fr[0].afspraaktext;
            document.querySelector("#afspraakcontent").innerHTML = translations[0].fr[0].afspraakcontent;    
        } catch(e){}

        try{
            document.querySelector("#amsterdam1").innerHTML = translations[0].fr[0].amsterdam1;
            document.querySelector("#amsterdam2").innerHTML = translations[0].fr[0].amsterdam2;
            document.querySelector("#amsterdam3").innerHTML = translations[0].fr[0].amsterdam3;
        }catch(e){}

        try{
            document.querySelector("#amstelveen1").innerHTML = translations[0].fr[0].amstelveen1;
            document.querySelector("#amstelveen2").innerHTML = translations[0].fr[0].amstelveen2;
            document.querySelector("#amstelveen3").innerHTML = translations[0].fr[0].amstelveen3;
        }catch(e){}

        try{
            document.querySelector("#zaandam1").innerHTML = translations[0].fr[0].zaandam1;
            document.querySelector("#zaandam2").innerHTML = translations[0].fr[0].zaandam2;
            document.querySelector("#zaandam3").innerHTML = translations[0].fr[0].zaandam3;
        }catch(e){}

        try{
            document.querySelector("#diemen1").innerHTML = translations[0].fr[0].diemen1;
            document.querySelector("#diemen2").innerHTML = translations[0].fr[0].diemen2;
            document.querySelector("#diemen3").innerHTML = translations[0].fr[0].diemen3;
        }catch(e){}

        try{
            document.querySelector("#hoofddorp1").innerHTML = translations[0].fr[0].hoofddorp1;
            document.querySelector("#hoofddorp2").innerHTML = translations[0].fr[0].hoofddorp2;
            document.querySelector("#hoofddorp3").innerHTML = translations[0].fr[0].hoofddorp3;
        }catch(e){}

        try{
            document.querySelector("#haarlem1").innerHTML = translations[0].fr[0].haarlem1;
            document.querySelector("#haarlem2").innerHTML = translations[0].fr[0].haarlem2;
            document.querySelector("#haarlem3").innerHTML = translations[0].fr[0].haarlem3;
        }catch(e){}

        try{
            document.querySelector("#zaandijk1").innerHTML = translations[0].fr[0].zaandijk1;
            document.querySelector("#zaandijk2").innerHTML = translations[0].fr[0].zaandijk2;
            document.querySelector("#zaandijk3").innerHTML = translations[0].fr[0].zaandijk3;
        }catch(e){}

        try{
            document.querySelector("#krommenie1").innerHTML = translations[0].fr[0].krommenie1;
            document.querySelector("#krommenie2").innerHTML = translations[0].fr[0].krommenie2;
            document.querySelector("#krommenie3").innerHTML = translations[0].fr[0].krommenie3;
        }catch(e){}

        try{
            document.querySelector("#assendelft1").innerHTML = translations[0].fr[0].assendelft1;
            document.querySelector("#assendelft2").innerHTML = translations[0].fr[0].assendelft2;
            document.querySelector("#assendelft3").innerHTML = translations[0].fr[0].assendelft3;
        }catch(e){}

        try{
            document.querySelector("#wormerveer1").innerHTML = translations[0].fr[0].wormerveer1;
            document.querySelector("#wormerveer2").innerHTML = translations[0].fr[0].wormerveer2;
            document.querySelector("#wormerveer3").innerHTML = translations[0].fr[0].wormerveer3;
        }catch(e){}

        try{
            document.querySelector("#oostzaan1").innerHTML = translations[0].fr[0].oostzaan1;
            document.querySelector("#oostzaan2").innerHTML = translations[0].fr[0].oostzaan2;
            document.querySelector("#oostzaan3").innerHTML = translations[0].fr[0].oostzaan3;
        }catch(e){}

        try{
            document.querySelector("#afspraaktitle").innerHTML = translations[0].fr[0].afspraaktitle;
            document.querySelector("#afspraaktext1").innerHTML = translations[0].fr[0].afspraaktext1;
            document.querySelector("#afspraakvan").innerHTML = translations[0].fr[0].afspraakvan;
            document.querySelector("#afspraaknaar").innerHTML = translations[0].fr[0].afspraaknaar;
            document.querySelector("#afspraakdatum").innerHTML = translations[0].fr[0].afspraakdatum;
            document.querySelector("#afspraaktijden").innerHTML = translations[0].fr[0].afspraaktijden;
            document.querySelector("#afspraaktext2").innerHTML = translations[0].fr[0].afspraaktext2;
            document.querySelector("#afspraaktext3").innerHTML = translations[0].fr[0].afspraaktext3;
            document.querySelector("#afspraakauto1").innerHTML = translations[0].fr[0].afspraakauto1;
            document.querySelector("#prijs1").innerHTML = translations[0].fr[0].prijs1;
            document.querySelector("#afspraak1").innerHTML = translations[0].fr[0].afspraak1;
            document.querySelector("#afspraakauto2").innerHTML = translations[0].fr[0].afspraakauto2;
            document.querySelector("#prijs2").innerHTML = translations[0].fr[0].prijs2;
            document.querySelector("#afspraak2").innerHTML = translations[0].fr[0].afspraak2;
            document.querySelector("#afspraakauto3").innerHTML = translations[0].fr[0].afspraakauto3;
            document.querySelector("#prijs3").innerHTML = translations[0].fr[0].prijs3;
            document.querySelector("#afspraak3").innerHTML = translations[0].fr[0].afspraak3;
            document.querySelector("#firstcity").innerHTML = translations[0].fr[0].firstcity;
            document.querySelector(".searchinput").placeholder = translations[0].fr[0].searchinput;
        }catch(e){}

    } else if (language === "ch") {
        try{
            document.querySelector("#nav1").innerHTML = translations[0].ch[0].nav1;
            document.querySelector("#nav2").innerHTML = translations[0].ch[0].nav2;
            document.querySelector("#nav3").innerHTML = translations[0].ch[0].nav3;
            document.querySelector("#nav4").innerHTML = translations[0].ch[0].nav4;
            document.querySelector("#nav5").innerHTML = translations[0].ch[0].nav5;
        } catch(e){} 

        try{
            document.querySelector("#herotitel").innerHTML = translations[0].ch[0].herotitel;
            document.querySelector("#heropoint1").innerHTML = translations[0].ch[0].heropoint1;
            document.querySelector("#heropoint2").innerHTML = translations[0].ch[0].heropoint2;
            document.querySelector("#heropoint3").innerHTML = translations[0].ch[0].heropoint3;
            document.querySelector("#heropoint4").innerHTML = translations[0].ch[0].heropoint4;
            document.querySelector("#herobtn").innerHTML = translations[0].ch[0].herobtn;
        } catch(e){}

        try{
            document.querySelector("#calculatortitel1").innerHTML = translations[0].ch[0].calculatortitel1;
            document.querySelector("#calculatortitel2").innerHTML = translations[0].ch[0].calculatortitel2;
            document.querySelector("#calculatortext1").innerHTML = translations[0].ch[0].calculatortext1;
            document.querySelector("#calculatortext2").innerHTML = translations[0].ch[0].calculatortext2;
            document.querySelector("#calculatortext3").innerHTML = translations[0].ch[0].calculatortext3;
            document.querySelector("#calculatortext4").innerHTML = translations[0].ch[0].calculatortext4;
            document.querySelector("#calculatorbtn").innerHTML = translations[0].ch[0].calculatorbtn;
            document.querySelector("#kmamountlabel").innerHTML = translations[0].ch[0].kmamountlabel;
        } catch(e){} 

        try{
            document.querySelector("#footertitel1").innerHTML = translations[0].ch[0].footertitel1;
            document.querySelector("#footertitel2").innerHTML = translations[0].ch[0].footertitel2;
            document.querySelector("#footerlink1").innerHTML = translations[0].ch[0].footerlink1;
            document.querySelector("#footerlink2").innerHTML = translations[0].ch[0].footerlink2;
            document.querySelector("#footerlink3").innerHTML = translations[0].ch[0].footerlink3;
            document.querySelector("#footerlink4").innerHTML = translations[0].ch[0].footerlink4;
            document.querySelector("#footerlink5").innerHTML = translations[0].ch[0].footerlink5;
            document.querySelector("#footercopyright").innerHTML = translations[0].ch[0].footercopyright;
        } catch(e){}

        try{
            document.querySelector("#prijstext").innerHTML = translations[0].ch[0].prijstext;
            document.querySelector("#prijscontent").innerHTML = translations[0].ch[0].prijscontent;
        } catch(e){}

        try{
            document.querySelector("#overonstext").innerHTML = translations[0].ch[0].overonstext;
            document.querySelector("#overonscontent1").innerHTML = translations[0].ch[0].overonscontent1;    
            document.querySelector("#overonscontent2").innerHTML = translations[0].ch[0].overonscontent2;    
        } catch(e){}

        try{
            document.querySelector("#rijgebiedentext").innerHTML = translations[0].ch[0].rijgebiedentext;
            document.querySelector("#rijgebiedencontent1").innerHTML = translations[0].ch[0].rijgebiedencontent1;    
            document.querySelector("#rijgebiedencontent2").innerHTML = translations[0].ch[0].rijgebiedencontent2;
        } catch(e){}

        try{
            document.querySelector("#afspraaktext").innerHTML = translations[0].ch[0].afspraaktext;
            document.querySelector("#afspraakcontent").innerHTML = translations[0].ch[0].afspraakcontent;    
        } catch(e){}

        try{
            document.querySelector("#amsterdam1").innerHTML = translations[0].ch[0].amsterdam1;
            document.querySelector("#amsterdam2").innerHTML = translations[0].ch[0].amsterdam2;
            document.querySelector("#amsterdam3").innerHTML = translations[0].ch[0].amsterdam3;
        }catch(e){}

        try{
            document.querySelector("#amstelveen1").innerHTML = translations[0].ch[0].amstelveen1;
            document.querySelector("#amstelveen2").innerHTML = translations[0].ch[0].amstelveen2;
            document.querySelector("#amstelveen3").innerHTML = translations[0].ch[0].amstelveen3;
        }catch(e){}

        try{
            document.querySelector("#zaandam1").innerHTML = translations[0].ch[0].zaandam1;
            document.querySelector("#zaandam2").innerHTML = translations[0].ch[0].zaandam2;
            document.querySelector("#zaandam3").innerHTML = translations[0].ch[0].zaandam3;
        }catch(e){}

        try{
            document.querySelector("#diemen1").innerHTML = translations[0].ch[0].diemen1;
            document.querySelector("#diemen2").innerHTML = translations[0].ch[0].diemen2;
            document.querySelector("#diemen3").innerHTML = translations[0].ch[0].diemen3;
        }catch(e){}

        try{
            document.querySelector("#hoofddorp1").innerHTML = translations[0].ch[0].hoofddorp1;
            document.querySelector("#hoofddorp2").innerHTML = translations[0].ch[0].hoofddorp2;
            document.querySelector("#hoofddorp3").innerHTML = translations[0].ch[0].hoofddorp3;
        }catch(e){}

        try{
            document.querySelector("#haarlem1").innerHTML = translations[0].ch[0].haarlem1;
            document.querySelector("#haarlem2").innerHTML = translations[0].ch[0].haarlem2;
            document.querySelector("#haarlem3").innerHTML = translations[0].ch[0].haarlem3;
        }catch(e){}

        try{
            document.querySelector("#zaandijk1").innerHTML = translations[0].ch[0].zaandijk1;
            document.querySelector("#zaandijk2").innerHTML = translations[0].ch[0].zaandijk2;
            document.querySelector("#zaandijk3").innerHTML = translations[0].ch[0].zaandijk3;
        }catch(e){}

        try{
            document.querySelector("#krommenie1").innerHTML = translations[0].ch[0].krommenie1;
            document.querySelector("#krommenie2").innerHTML = translations[0].ch[0].krommenie2;
            document.querySelector("#krommenie3").innerHTML = translations[0].ch[0].krommenie3;
        }catch(e){}

        try{
            document.querySelector("#assendelft1").innerHTML = translations[0].ch[0].assendelft1;
            document.querySelector("#assendelft2").innerHTML = translations[0].ch[0].assendelft2;
            document.querySelector("#assendelft3").innerHTML = translations[0].ch[0].assendelft3;
        }catch(e){}

        try{
            document.querySelector("#wormerveer1").innerHTML = translations[0].ch[0].wormerveer1;
            document.querySelector("#wormerveer2").innerHTML = translations[0].ch[0].wormerveer2;
            document.querySelector("#wormerveer3").innerHTML = translations[0].ch[0].wormerveer3;
        }catch(e){}

        try{
            document.querySelector("#oostzaan1").innerHTML = translations[0].ch[0].oostzaan1;
            document.querySelector("#oostzaan2").innerHTML = translations[0].ch[0].oostzaan2;
            document.querySelector("#oostzaan3").innerHTML = translations[0].ch[0].oostzaan3;
        }catch(e){}

        try{
            document.querySelector("#afspraaktitle").innerHTML = translations[0].ch[0].afspraaktitle;
            document.querySelector("#afspraaktext1").innerHTML = translations[0].ch[0].afspraaktext1;
            document.querySelector("#afspraakvan").innerHTML = translations[0].ch[0].afspraakvan;
            document.querySelector("#afspraaknaar").innerHTML = translations[0].ch[0].afspraaknaar;
            document.querySelector("#afspraakdatum").innerHTML = translations[0].ch[0].afspraakdatum;
            document.querySelector("#afspraaktijden").innerHTML = translations[0].ch[0].afspraaktijden;
            document.querySelector("#afspraaktext2").innerHTML = translations[0].ch[0].afspraaktext2;
            document.querySelector("#afspraaktext3").innerHTML = translations[0].ch[0].afspraaktext3;
            document.querySelector("#afspraakauto1").innerHTML = translations[0].ch[0].afspraakauto1;
            document.querySelector("#prijs1").innerHTML = translations[0].ch[0].prijs1;
            document.querySelector("#afspraak1").innerHTML = translations[0].ch[0].afspraak1;
            document.querySelector("#afspraakauto2").innerHTML = translations[0].ch[0].afspraakauto2;
            document.querySelector("#prijs2").innerHTML = translations[0].ch[0].prijs2;
            document.querySelector("#afspraak2").innerHTML = translations[0].ch[0].afspraak2;
            document.querySelector("#afspraakauto3").innerHTML = translations[0].ch[0].afspraakauto3;
            document.querySelector("#prijs3").innerHTML = translations[0].ch[0].prijs3;
            document.querySelector("#afspraak3").innerHTML = translations[0].ch[0].afspraak3;
            document.querySelector("#firstcity").innerHTML = translations[0].ch[0].firstcity;
            document.querySelector(".searchinput").placeholder = translations[0].ch[0].searchinput;
        }catch(e){}

    } 



}
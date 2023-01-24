import React from 'react';
import './Reviews.css'; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar  } from '@fortawesome/free-solid-svg-icons'

const Reviews = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      const reviews=[
{
    name:"Natalia S.",
    text:"Kontakt z firmą bezproblemowy. Menedżer bardzo pomocny i rzeczowy. Współpraca z taką firmą to przyjemność. Instalacja przebiegła sprawnie i wszystko w terminie. Gorąco polecam, bo warto!",
},
{
    name:"Aleksandra B",
    text:"Firma z potencjałem. Mają swoich instalatorów. Wszystko przebiegło szybko i sprawnie . Polecam",
},
{
    name:"SMOKE UNITY",
    text:"Ekipa monterska Pierwsza klasa! Polecam szczególnie Pana Macieja. Jako firma lekkie opóźnienie mają w realizacji ale mimo wszytko warto!",
},
{
    name:"Jarosław S.",
    text:"Od początku do końca instalacji pełen profesjonalizm."    ,
},
{
    name:"Aleksandra B",
    text:"Firma z potencjałem. Mają swoich instalatorów. Wszystko przebiegło szybko i sprawnie . Polecam",
},
{
    name:"Bogusław K.",
    text:"Jestem zadowolony z obsługi przez doradcę. Wyjaśnił zawiłości i zdjagnozowal potrzeby energetyczne. Panowie od montażu szybko i dobrze wykonali instalacje. Pozdrawiam i dziękuję.",
},
{
    name:"Mieczysław M.",
    text:"Zależało mi na szybkim montażu i konkurencyjnej cenie. Wybrałem Comeko montaż po 4 dniach od podpisania umowy, Instalacja uruchomiona kolejnego dnia, wszystko zgodnie z oczekiwaniami. Duża pomoc i kompleksowa obsługa wniosków i doradztwa, teraz obserwuję na aplikacji produkcję mojego prądu. Polecam Comeko Sp. z o.o ze Szczecina Mieczysław",
},
{
    name:"Łukasz B.",
    text:"Od poczatku bardzo fajny kontakt z przedstawicielem firmy. Kontakt w duzym stopniu inny niz z innymi firmami, bardzo zyczliwy i poswiecajacy czas inwestorowi. Ekipa montujaca takze super. Jak to mowia wszystko po ale, jest wazne. Jak na razie wszystko ok :)",
},

]



    return ( 


        <div className='Reviews'>
            <h1> Co mówią o nas klienci?</h1>
<Carousel 
responsive={responsive}
infinite={true}
autoPlay={true}

>

    {

reviews?reviews.map(one=>
<div className="oneReviewWrap">
<div className='stars'><FontAwesomeIcon icon={faStar} size="2x" /><FontAwesomeIcon icon={faStar} size="2x" /><FontAwesomeIcon icon={faStar} size="2x" /><FontAwesomeIcon icon={faStar} size="2x" /><FontAwesomeIcon icon={faStar} size="2x" /></div>
<div className='rev'>{one.text}</div>
<div className='per'>{one.name}</div>


</div>


):null

    }

</Carousel>;

        </div>
     );
}
 
export default Reviews;
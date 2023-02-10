import './Knowledge.css';
import React,{useEffect} from 'react';
import Navi from '../Navi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Article from './Article';
import ogolne from '../../images/knowledge/ogolne.webp'
import netMetering from '../../images/knowledge/netMetering.webp';
import podzespoly from '../../images/knowledge/podzespoly.webp';
import oplacalnosc from '../../images/knowledge/oplacalnosc.jpg';
import pompaCiepla from '../../images/knowledge/pompaCiepla.webp';


import mojprad from '../../images/knowledge/mojprad.jpg';
import magazyny from '../../images/knowledge/magazyny.jpg';
import ladowarki from '../../images/knowledge/ladowarki.jpg';
import pvpc from '../../images/knowledge/pvpc.jpg';
import pcsrebrna from '../../images/knowledge/pcsrebrna.jpg';
import samodzielnepv from '../../images/knowledge/samodzielnepv.jpg';
import GetPrice from '../../main/GetPrice';


const Knowledge = () => {
    useEffect(()=>{

        window.scrollTo(0, 0)
    
    },[])
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
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
const frame1=[
{
name:"Fotowoltaika od Comeko",
text:"Sprawdź co Comeko moze Ci zaproponować pod wględem wykonania instalacji fotowoltaicznej.",
img:ogolne,
to:"/wiedza/fotowoltaika",

},
{name:"Czy net billing się jeszcze opłaca? ",
text:"Sprawdź czy po zmienie rozliczeń z zakładem energetycznym nadal opłaca się montować fotowoltaikę ",
img:oplacalnosc,
to:"/wiedza/czy-net-billing-sie-oplaca",

},
{name:"Jakie podzespoły wybrać?",
text:" Sprawdź które moduły i falowniki wybrać aby spać spokojnie!",
img:podzespoly,
to:"/wiedza/pv-jakie-podzespoly-wybrac",

},
{name:"Jak działa Net Billing?",
text:"Nowe zasady rozliczeń są nie do końca jasne? Sprawdź jak działa net billing!",
img:netMetering,
to:"/wiedza/jak-dziala-net-billing",
},


    
]
const frame2=[
    {
    name:"Pompy ciepła od Comeko",
    text:"Sprawdź co Comeko moze Ci zaproponować aby zapewnić ciepło w Twoim domu!.",
    img:pompaCiepla,
    to:"/wiedza/pompy-ciepla",
    
    },
    {name:"Powietrzna pompa ciepła - jak działa",
    text:"W jaki sposób działają powietrzne pompy ciepła! ",
    img:pcsrebrna,
    to:"/wiedza/popmpy-ciepla-jak-dziala-pompa-powietrzna",
    
    },
    {name:"Czy pompa ciepła jest dla mnie?",
    text:"Sprawdź co Comeko moze Ci zaproponować pod wględem wykonania instalacji fotowoltaicznej.",
    img:podzespoly,
    to:"/wiedza/pompy-ciepla-czy-jest-dla-mnie",
    
    },
    {name:"Fotowoltaika i pompa ciepła - duet idealny?",
    text:"Być moze pompa ciepła i fotowoltaika to idealne dopełnienie. Sprawdź!",
    img:pvpc,
    to:"/wiedza/pompy-ciepla-i-fotowoltaika-duet-idealny",
    },
    
    
        
    ]


    const frame3=[
        {
        name:"Ładowarki Samochodowe",
        text:"Masz samochód elektryczny i chcesz go ładować w domu? Sprawdź!",
        img:ladowarki,
        to:"/wiedza/ladowarki-samochodowe",
        
        },
        {name:"Magazyny energii",
        text:"Czy magazyny energii się opłacają? ",
        img:magazyny,
        to:"/wiedza/magazyny-energii",
        
        },
        {name:"Program 'Mój prąd' - Ile mogę zyskać?",
        text:"Ile wynosi aktualna dotacja programu Mój prąd?",
        img:mojprad,
        to:"/wiedza/moj-prad",
        
        },
        {name:"Zestawy do samodzielnego montazu ",
        text:"Z nami zaoszczędzisz na montazu instalacji fotowoltaicznej! Sprawdź! ",
        img:samodzielnepv,
        to:"/wiedza/zestawy-bez-montazu",
        },
        
        
            
        ]

    return ( 
        <div className='Knowledge'>
<Navi/>
<h1>Baza wiedzy Comeko</h1>
<h2> Fotowoltaika</h2>
<div className="karuzelka">
<Carousel 
responsive={responsive}
infinite={true}
autoPlay={true}
>
{frame1?frame1.map(one=>
<Article name={one.name} to={one.to} img={one.img} text={one.text}/>):null}

</Carousel>
</div>


<h2> Pompy ciepła</h2>
<div className="karuzelka">
<Carousel 
responsive={responsive}
infinite={true}
autoPlay={true}

>
{frame2?frame2.map(one=>
<Article name={one.name} to={one.to} img={one.img} text={one.text}/>):null}

</Carousel>
</div>
<h2> Pozostałe</h2>
<div className="karuzelka">
<Carousel 
responsive={responsive}
infinite={true}
autoPlay={true}
>
{frame3?frame3.map(one=>
<Article name={one.name} to={one.to} img={one.img} text={one.text}/>):null}

</Carousel>
</div>
<GetPrice/>
        </div>
     );
}
 
export default Knowledge;
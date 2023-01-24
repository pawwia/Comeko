import React, {useEffect} from 'react';
import './WhatWeDo.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const WhatWeDo = () => {

    useEffect(()=>{
        AOS.init();
    
    
    },[])
    return ( 

        <div className='WhatWeDo' >
<h4>Czym się zajmujemy?</h4>
<h1> Pomagamy naszym klientom oszczędzać na rachunach za prąd wykorzystując energię słońca!</h1>
<div className='elements'>
<div className='oneElement' data-aos="fade-left">
<div className='Description'>    <div className='Circle one'></div>
<h1> Fotowoltaika dla domu</h1>
<p>Dowiedz się w jaki sposób znacznie zredukować rachunki za prąd w gospodarstwie domowym oraz jak ogrzać dom wykorzystując energię słoneczną.</p>
<Link to="/">
Dowiedz się więcej
</Link>
</div>

</div>

<div className='oneElement' data-aos="fade-up">
<div className='Description'>    <div className='Circle two'></div>

<h1> Fotowoltaika dla firm</h1>
<p>Prąd ze słońca moze pomóc Twojej firmie w maksymalizacji oszczędności za energię elektryczną. Uchroń firmę przed ciągle rosnącymi rachunkami i bądź eko z Comeko! </p>
<Link to="/">
Dowiedz się więcej
</Link>
</div>
</div>

<div className='oneElement' data-aos="fade-right">
<div className='Description'>    <div className='Circle three'></div>
<h1> Zestawy gotowe do montazu </h1>
<p>Chcesz samemu zamontować instalację na swoim dachu lub poszukujesz podzespołów pod klienta? Nasza oferta powinna Cię zainteresować!</p>
<Link to="/">
Dowiedz się więcej
</Link>
</div>
</div>

<div className='oneElement' data-aos="fade-left">
<div className='Description'>    <div className='Circle four'></div>
<h1> Magazyny energii</h1>
<p>Uchroń swój dom przed rosnącymi cenami prądu. Postaw na magazyny energii. Uniezaleznij się częściowo lub całkowicie od zakładu energetycznego! </p>
<Link to="/">
Dowiedz się więcej
</Link>
</div>
</div>

<div className='oneElement' data-aos="fade-up">
<div className='Description'>    <div className='Circle five'></div>
<h1> Pompy ciepła</h1>
<p>Jezeli szukasz pomysłu na wieloletnie bezawaryjne ogrzewanie domu przy minimalnych kosztach - Fotowoltaika w połączeniu z pompami ciepła na pewno spełnią swoje zadanie! </p>
<Link to="/">
Dowiedz się więcej
</Link>
</div>
</div>

<div className='oneElement' data-aos="fade-right">
<div className='Description'>    <div className='Circle six'></div>
<h1> Ładowarki Samochodowe</h1>
<p>Naładuj swój elektyczny samochód lub hybrydę plug-in za pomocą szybkiej ładowarki w Twoim domu. Sprawdź naszą ofertę!</p>
<Link to="/">
Dowiedz się więcej
</Link>
</div>
</div>
</div>


        </div>
     );
}
 
export default WhatWeDo;
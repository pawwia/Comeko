import React, {useState, useEffect} from 'react';
import Navi from '../Navi';
import './Finance.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import Askme from './Askme';

import AOS from 'aos';
import 'aos/dist/aos.css';






            

const Finance = () => {
    useEffect(()=>{

        window.scrollTo(0, 0)
    
    },[])
    useEffect(()=>{
        AOS.init();
    
    
    },[])
    const [who,setWho]=useState(1);
    return (
        <div className='FinAll'>
                <Navi/>
<div className='contentLeftRight'>
<div className='Finance'>
<h1 data-aos="fade-right"> Jak sfinansować fotowoltaikę lub pompę ciepła</h1>
<h2 data-aos="fade-right"> W obecnych czasach coraz mniej osób płaci za instalację fotowoltaiczną czy pompę ciepła z własnej kieszeni. Nic zatem dziwnego, ze coraz popularniejsze stają się liczne formy finansowania tego typu inwestycji.Przyjrzyjmy się teraz kazdemu z nich.</h2>
<div className='WhoIam' data-aos="fade-right">
<div className={who===1?'WhoIamElement blue':'WhoIamElement'} onClick={()=>{setWho(1)}}>
<FontAwesomeIcon icon={faHouse }size="5x"/>
<p> Szukam rozwiązania dla domu</p>
</div>
<div className={who===2?'WhoIamElement blue':'WhoIamElement'} onClick={()=>{setWho(2)}}>
<FontAwesomeIcon icon={faBuilding}size="5x"/>
<p> Szukam rozwiązania dla firmy</p>

</div>

</div>
{who===1?<div data-aos="fade-right" className="FinanceMenu"><a href="#wlasne" >Środki własne</a><a href="#kredyt" >Kredyt</a> <a href="#dotacje" >Dotacje</a>
<a href="#zachety" >Ulga podatkowa</a></div>:
<div  data-aos="fade-right" className="FinanceMenu"><a href="#wlasne" >Środki własne</a><a href="#kredyt" >Kredyt</a><a href="#leasing" >Leasing</a> <a href="#dotacje" >Dotacje</a>
</div>}

{who===1?<div><div data-aos="fade-right" className='oneOption' id="wlasne">
    <h1> Środki własne</h1>
<div className='Avability'>

</div>
<div className='Contain'>
<p>Inwestycja w fotowoltaikę z własnych środków to doskonała okazja, aby zmniejszyć koszty związane z dostarczaniem energii elektrycznej do domu lub firmy. Ponadto, jeśli instalacja jest w stanie produkować więcej energii niż jest potrzebna, można ją sprzedawać do sieci i generować dodatkowe dochody. Inwestycja w fotowoltaikę jest też dobrym krokiem w kierunku zrównoważonej i ekologicznej energii.</p>


</div>

</div>






<div className='oneOption' data-aos="fade-right" id="kredyt">
    <h1> Kredyt</h1>
<div className='Avability'>

</div>
<div className='Contain'>
<p>Kredyt na fotowoltaikę jest dobrym rozwiązaniem dla osób, które chcą inwestować w fotowoltaikę, ale nie posiadają wystarczających środków własnych. Wiele banków oferuje specjalne kredyty na instalację paneli słonecznych i magazynów energii, umożliwiając tym samym szybsze i łatwiejsze finansowanie inwestycji. Kredyt na fotowoltaikę może być bardzo opłacalny, ponieważ oszczędności na rachunkach za energię elektryczną mogą pokryć jego miesięczną ratę.</p>
<p>W Comeko współpracujemy z bankiem Santander Consumer Bank który oferuje jedne z najbardziej korzystnych oprocentowań na rynku. Kredyt do 30 tys zł moliwy jest bez okazywania dokumentów poświadczających zarobki. Ofertę przedstawimy Ci od ręki. Przeprowadzimy Cię przez cały proces uzyskiwania kredytu na instalację pv w ciągu jednego spotkania. Napisz do nas i sprawdź!</p>

</div>

</div>





<div className='oneOption' data-aos="fade-right" id="dotacje">
    <h1> Dotacje</h1>
<div className='Avability'>
    
</div>
<div className='Contain'>
<h4>Mój Prąd</h4>
<p>Program "Mój Prąd" to rządowy program, który ma na celu rozwój energii odnawialnej w Polsce, zwłaszcza fotowoltaiki. Jego celem jest zwiększenie udziału energii odnawialnej w bilansie energii kraju oraz zwiększenie liczby indywidualnych instalacji fotowoltaicznych.</p>

<p>Program "Mój Prąd" polega na dofinansowaniu instalacji fotowoltaicznych przez państwo. Inwestorzy mogą składać wnioski o dofinansowanie, które jest udzielane na zasadzie refundacji części kosztów związanych z instalacją paneli fotowoltaicznych.</p>

<p>Na początku 2023 roku z dotacji "Mój prąd" mozna dostać kwotę nawet 23 tys zł. o ile jednocześnie dokonało się zakupu instalacji fotowoltaicznej wraz z magazynem energii. Dla instalacji bez magazynu energii kwota ta wynosi 6 tys zł.</p>

<p>Program jest skierowany do indywidualnych odbiorców energii elektrycznej, którzy chcą inwestować w instalacje fotowoltaicz</p>

<h4> Czyste powietrze</h4> 

<p>Program "Czyste Powietrze" to rządowy program, który ma na celu poprawę jakości powietrza w Polsce poprzez modernizację budynków mieszkalnych i przemysłowych. Jego celem jest również zwiększenie efektywności energetycznej budynków oraz redukcja emisji gazów cieplarnianych.</p>

<p>Program "Czyste Powietrze" polega na udzielaniu dotacji na przeprowadzanie prac modernizacyjnych w budynkach mieszkalnych i przemysłowych. Możliwe do uzyskania dotacje to m.in. wymiana starych pieców na nowoczesne źródła ciepła, termomodernizacja budynku, instalacja fotowoltaiki, itp.</p>

<p>Program jest skierowany do właścicieli domów jednorodzinnych, wspólnot mieszkaniowych, spółdzielni mieszkaniowych oraz przedsiębiorstw, którzy chcą przeprowadzić prace modernizacyjne swoich budynków.</p>

<p>Program "Czyste Powietrze" jest ważnym krokiem w kierunku poprawy jakości powietrza w Polsce i zwiększenia efektywności energetycznej budynków, a przez to przyczynia się do ochrony środowiska i redukcji emisji gazów cieplarnianych.</p>
</div>

</div>



<div className='oneOption' data-aos="fade-right" id="zachety">
    <h1> Zachęty finansowe</h1>
<div className='Avability'>
<h4> Ulga termomodernizacja</h4>


</div>
<div className='Contain'>

<p>  Ulga termomodernizacyjna w Polsce to zachęta dla inwestorów do modernizacji budynków i zastosowania energii odnawialnej, w tym fotowoltaiki. Polega na zwrocie części kosztów poniesionych na inwestycję w formie zmniejszenia podatku dochodowego.



</p>

</div>

</div>

</div>:




<div><div className='oneOption' data-aos="fade-right" id="wlasne">
    <h1> Środki własne</h1>
<div className='Avability'>

</div>
<div className='Contain'>
<p>Inwestycja w fotowoltaikę z własnych środków to najszybciej zwracająca się opcja. Oszczędności na rachunkach za energię i sprzedaż nadwyżek do sieci przyspieszają zwrot z inwestycji.</p>
</div>

</div>






<div className='oneOption' data-aos="fade-right" id="kredyt">
    <h1> Kredyt</h1>
<div className='Avability'>

</div>
<div className='Contain'>

</div>

</div>





<div className='oneOption' data-aos="fade-right" id="leasing">
    <h1> Leasing </h1>
<div className='Avability'>

</div>
<div className='Contain'>
<p>Leasing na fotowoltaikę dla firm to forma finansowania instalacji paneli słonecznych i magazynów energii, polegająca na płaceniu stałych rat przez określony czas. W tym modelu finansowania firma nie jest właścicielem instalacji, lecz korzysta z jej dobrodziejstw, takich jak obniżenie kosztów związanych z dostarczaniem energii elektrycznej. Po zakończeniu okresu leasingu firma może wykupić instalację lub wybrać inny sposób finansowania. Leasing na fotowoltaikę jest dobrym rozwiązaniem dla firm, które chcą inwestować w ekologiczną i oszczędną energię, bez konieczności angażowania dużych środków własnych.</p>  
</div>

</div>




<div className='oneOption' data-aos="fade-right" id="dotacje">
    <h1> Dotacje</h1>
<div className='Avability'>
    
</div>
<div className='Contain'>



</div>

</div>





</div>}






</div>
<div className='Askme'><Askme/></div>
</div>
</div>
      );
}
 
export default Finance;
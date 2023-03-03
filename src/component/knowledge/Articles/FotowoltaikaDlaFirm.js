import React, {useEffect} from 'react';
import Navi from '../../Navi';
import GetPrice from '../../../main/GetPrice';
import './FotowoltaikaDlaFirm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WhyWe from '../../../main/WhyWe';
import { faLightbulb, faBolt, faPiggyBank, faMoneyBillTrendUp,faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import corab from '../../../images/knowledge/corabp.png';
import Steps from '../../../main/Steps';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FotowoltaikaDlaFirm = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
        AOS.init();

    
    },[])








    return ( 
        <div className='Fotowoltaika' data-aos="flip-right" >
                <div className='naviHori' >
            <Navi/>
<div className='imagesContainer'>
    <div className='oneImage' data-aos="fade-right" id="pvzdj1"></div>
    <div className='oneImage' data-aos="fade-left" id="pvzdj2"></div>

</div>
<div className='textContainer'>
    <h2> Fotowoltaika dla firmy? Dlaczego się opłaca?</h2>
</div>
<div className='imagesContainer'>
    <div className='oneImage' data-aos="fade-right" id="pvzdj3"></div>
    <div className='oneImage' data-aos="fade-left" id="pvzdj4"></div>

</div>

            </div>



<div className='pveelement'>
    <div className='container'>

<div className='pvTo'>
<div className='left' data-aos="fade-right">
    <div className='Element'>
        <h3 style={{textAlign:"center", paddingLeft:"50px", fontSize:"35px"}}> Fotowoltaika to:</h3>
    </div>
    <div className='Element'>
    <div className='ElLeft'>
        <FontAwesomeIcon icon={faBolt} size="3x"/>
    </div>
    <div className='ElRight'>
    <h3> Inwestuj w przyszłość z fotowoltaiką </h3>
        <p>Fotowoltaika to inwestycja w przyszłość Twojej firmy. Oszczędzisz na rachunkach za energię elektryczną i zadbasz o środowisko.</p>
    </div>
       
    </div>
    <div className='Element'>
    <div className='ElLeft'>
        <FontAwesomeIcon icon={faLightbulb} size="3x"/>
    </div>
    <div className='ElRight'>
    <h3> Zrób pierwszy krok w kierunku zrównoważonego biznesu</h3>
        <p>Montaż instalacji fotowoltaicznej to pierwszy krok w kierunku zrównoważonego biznesu. Daj znać swoim klientom, że dbasz o ekologię.</p>
    </div>
       
    </div>
</div>
<div className='right' data-aos="fade-left">

<div className='Element'>
    <div className='ElLeft'>
        <FontAwesomeIcon icon={faPiggyBank} size="3x"/>
    </div>
    <div className='ElRight'>
    <h3> Oszczędność i niezależność od podwyżek cen prądu </h3>
        <p>Instalacja pozwala na oszczędność i niezależność od wzrostu cen prądu przez co najmniej 30 lat.</p>
    </div>
    
    </div>
    <div className='Element'>

    <div className='ElLeft'>
        <FontAwesomeIcon icon={faFaceSmile} size="3x"/>
    </div>
    <div className='ElRight'>
    <h3> Inwestycja z długoterminowym efektem </h3>
        <p>Fotowoltaika to inwestycja z długoterminowym efektem. Poza oszczędnościami na rachunkach, zyskasz także pozytywny wizerunek firmy.</p>
    </div>
       
    </div>
    <div className='Element'>
    <div className='ElLeft'>
        <FontAwesomeIcon icon={faMoneyBillTrendUp} size="3x"/>
    </div>
    <div className='ElRight'>
    <h3> Rozwijaj swój biznes z fotowoltaiką </h3>
        <p>Zainwestuj w fotowoltaikę i rozwijaj swój biznes. Możliwość oszczędzania na rachunkach pozwoli Ci na inwestowanie w nowe projekty.</p>
    </div>
        
    </div>

</div>
</div>

    </div>
    


</div>


<div className='pveelement'>
<WhyWe/>
</div>
<div className='pveelement'>

<div className='ourEqu' data-aos="fade-up-left">

<h3>Sprzęt fotowoltaiczny: jakość i bezpieczeństwo w instalacjach słonecznych</h3>

<p>W naszej ofercie znajdziecie niezawodny i wysokiej jakości sprzęt do montażu instalacji pv. Nasz sprzęt pochodzi od naszego partnera, firmy Corab, która jest liderem w branży i zapewnia najlepszej jakości produkty. Wszystkie nasze podzespoły posiadają ważne w Polsce gwarancje producentów.</p>

<p>W naszej ofercie znajdziecie moduły fotowoltaiczne, falowniki, zabezpieczenia, kable i system montażowy. Wszystko, co jest potrzebne do zamontowania instalacji fotowoltaicznej, która będzie produkować energię słoneczną i oszczędzać na kosztach energii elektrycznej.</p>

<p>Nasz sprzęt jest idealny do instalacji fotowoltaicznych różnej wielkości. Z naszym sprzętem można łatwo i szybko zamontować bezpieczne i trwałe instalacje, które będą działać przez wiele lat.</p>
<img src={corab} alt="partner corab" data-aos="fade-up"/>

<h3 data-aos="fade-up-right">Cele Comeko</h3>

<p data-aos="fade-up-right">Chcemy pokazać naszym klientom, że instalacja fotowoltaiczna to inwestycja, która przynosi korzyści i niezależność od sieci energetycznej. Dlatego współpracujemy tylko z najlepszymi producentami branży i dbamy o jakość każdego projektu.</p>

<p data-aos="fade-up-left">Określamy dokładne potrzeby energetyczne, aby każda instalacja fotowoltaiczna była dostosowana do indywidualnych potrzeb danego gospodarstwa domowego. Dzięki naszej pomocy, wiele zadowolonych klientów w całej Polsce produkuje własną energię elektryczną.</p>
<h3 data-aos="fade-up"> Marki</h3>
<p>W naszej ofercie posiadamy moduły takich firm jak Risen, Longi, Jinko, Encore, Selfa, Q.Cells, Hyundai i wiele innych. </p>
<p>Falowniki które najczęściej stosujemy to: Sofar, Solaredge, Fronius, Huawei i inne! </p>
<p> Jeśli szukasz wykonawcy instalacji pv na podzespołach konkretnych marek- napisz do nas! Nie narzucamy klientom podzespołów. </p>

</div>



</div>

<div className='pveelement'>
<div className='container'>

<div className="pvTo">
<div className='GwLeft' data-aos="fade-up-right">
    <h3> Gwarancja Comeko</h3>
    <p>Decydując się na współpracę z Comeko otrzymujesz od nas 5 letnią rękojmie na nasze usługi. W razie awarii instalacji nasz serwis jest gotowy w szybkim czasie przyjechać i naprawić userkę. </p>
<h4> Cechy gwarancji Comeko</h4>
<div className='GwBut'>Profesjonalny seriws</div>
<div className='GwBut'>Szybki czas reakcji</div>
<div className='GwBut'>5 lat spokoju</div>



</div>
<div className='GwRight' data-aos="fade-up-left"></div>

</div>
</div>
</div>

<div className='pveelement'>
<Steps/></div>
<div className='pveelement'>
<GetPrice/>
</div>






        </div>
     );
}
 
export default FotowoltaikaDlaFirm

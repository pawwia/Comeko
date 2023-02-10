import React, {useEffect} from 'react';
import Navi from '../../Navi';
import GetPrice from '../../../main/GetPrice';
import './Fotowoltaika.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WhyWe from '../../../main/WhyWe';
import { faLightbulb, faBolt, faPiggyBank, faMoneyBillTrendUp,faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import corab from '../../../images/knowledge/corabp.png';
import Steps from '../../../main/Steps';
const Fotowoltaika = () => {
    








    return ( 
        <div className='Fotowoltaika'>
                <div className='naviHori'>
            <Navi/>
<div className='imagesContainer'>
    <div className='oneImage' id="pvzdj1"></div>
    <div className='oneImage' id="pvzdj2"></div>

</div>
<div className='textContainer'>
    <h2> Fotowoltaika z Comeko - dlaczego się opłaca?</h2>
</div>
<div className='imagesContainer'>
    <div className='oneImage' id="pvzdj3"></div>
    <div className='oneImage' id="pvzdj4"></div>

</div>

            </div>



<div className='pveelement'>
    <div className='container'>

<div className='pvTo'>
<div className='left'>
    <div className='Element'>
        <h3 style={{textAlign:"center", paddingLeft:"50px", fontSize:"35px"}}> Fotowoltaika to:</h3>
    </div>
    <div className='Element'>
    <div className='ElLeft'>
        <FontAwesomeIcon icon={faBolt} size="3x"/>
    </div>
    <div className='ElRight'>
    <h3> Darmowa energia elektryczna </h3>
        <p>Instalacja fotowoltaiczna pozwala na uzyskanie darmowej energii elektrycznej z odnawialnego i niewyczerpalnego źródła jakim jest słońce.</p>
    </div>
       
    </div>
    <div className='Element'>
    <div className='ElLeft'>
        <FontAwesomeIcon icon={faLightbulb} size="3x"/>
    </div>
    <div className='ElRight'>
    <h3> Czyste źródło energii </h3>
        <p>Fotowoltaika jest czystym źródłem energii, które nie emituje zanieczyszczeń, a po zużyciu paneli jest możliwy ich recykling.</p>
    </div>
       
    </div>
</div>
<div className='right'>

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
    <h3> Bezobsługowy i bezawaryjny system </h3>
        <p>Fotowoltaika to system, którego nie trzeba serwisować, a brak części ruchomych zmniejsza ryzyko usterki.</p>
    </div>
       
    </div>
    <div className='Element'>
    <div className='ElLeft'>
        <FontAwesomeIcon icon={faMoneyBillTrendUp} size="3x"/>
    </div>
    <div className='ElRight'>
    <h3> Podniesienie wartości nieruchomości </h3>
        <p>Instalacja fotowoltaiczna podnosi wartość nieruchomości, czyniąc ją bardziej atrakcyjną na rynku.</p>
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

<div className='ourEqu'>

<h3>Sprzęt fotowoltaiczny: jakość i bezpieczeństwo w instalacjach słonecznych</h3>

<p>W naszej ofercie znajdziecie niezawodny i wysokiej jakości sprzęt do montażu instalacji pv. Nasz sprzęt pochodzi od naszego partnera, firmy Corab, która jest liderem w branży i zapewnia najlepszej jakości produkty. Wszystkie nasze podzespoły posiadają ważne w Polsce gwarancje producentów.</p>

<p>W naszej ofercie znajdziecie moduły fotowoltaiczne, falowniki, zabezpieczenia, kable i system montażowy. Wszystko, co jest potrzebne do zamontowania instalacji fotowoltaicznej, która będzie produkować energię słoneczną i oszczędzać na kosztach energii elektrycznej.</p>

<p>Nasz sprzęt jest idealny do instalacji fotowoltaicznych różnej wielkości. Z naszym sprzętem można łatwo i szybko zamontować bezpieczne i trwałe instalacje, które będą działać przez wiele lat.</p>
<img src={corab} alt="partner corab"/>

<h3>Cele Comeko</h3>

<p>Chcemy pokazać naszym klientom, że instalacja fotowoltaiczna to inwestycja, która przynosi korzyści i niezależność od sieci energetycznej. Dlatego współpracujemy tylko z najlepszymi producentami branży i dbamy o jakość każdego projektu.</p>

<p>Określamy dokładne potrzeby energetyczne, aby każda instalacja fotowoltaiczna była dostosowana do indywidualnych potrzeb danego gospodarstwa domowego. Dzięki naszej pomocy, wiele zadowolonych klientów w całej Polsce produkuje własną energię elektryczną.</p>
<h3> Marki</h3>
<p>W naszej ofercie posiadamy moduły takich firm jak Risen, Longi, Jinko, Encore, Selfa, Q.Cells, Hyundai i wiele innych. </p>
<p>Falowniki które najczęściej stosujemy to: Sofar, Solaredge, Fronius, Huawei i inne! </p>
<p> Jeśli szukasz wykonawcy instalacji pv na podzespołach konkretnych marek- napisz do nas! Nie narzucamy klientom podzespołów. </p>

</div>



</div>

<div className='pveelement'>
<div className='container'>

<div className="pvTo">
<div className='GwLeft'>
    <h3> Gwarancja Comeko</h3>
    <p>Decydując się na współpracę z Comeko otrzymujesz od nas 5 letnią rękojmie na nasze usługi. W razie awarii instalacji nasz serwis jest gotowy w szybkim czasie przyjechać i naprawić userkę. </p>
<h4> Cechy gwarancji Comeko</h4>
<div className='GwBut'>Profesjonalny seriws</div>
<div className='GwBut'>Szybki czas reakcji</div>
<div className='GwBut'>5 lat spokoju</div>



</div>
<div className='GwRight'></div>

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
 
export default Fotowoltaika

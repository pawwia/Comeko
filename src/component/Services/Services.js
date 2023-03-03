import React,{useEffect} from 'react';
import './Services.css'
import Navi from '../Navi';
import pv from '../../images/Main/mf.png';
import pc from '../../images/Main/pc.png';
import me from '../../images/Main/me.png';
import lubuskie from '../../images/Main/lubuskie.png';
import zachpom from '../../images/Main/zachpom.png';
import GetPrice from '../../main/GetPrice';
import { Link } from 'react-router-dom';

const Services = (props) => {
    useEffect(()=>{

        window.scrollTo(0, 0);
        document.title=props.title

    
    },[])
    return ( 
        <div className='Services'>
            <div className='ServNavi'>
            <Navi/>

            </div>
            <h1> Usługi Comeko</h1>

          <div className='wrap'>
<div className='element'>
<div className='ElementInner'>

<div className='FirstSide'>

<div className='left'>
<h4>Fotowoltaika</h4>
<p>Darmowy i ekologiczny prąd ze słońca.</p>

</div>
<div className='right'><img src={pv} alt="moduł fotowoltaiczny" /></div>
</div>
<div className='SecondSide'>
<h4>Fotowoltaika</h4>
<p>Fotowoltaika to rozwiązanie pozwalające na pozyskiwanie energii z promieniowania słonecznego. Korzyści z jej stosowania to m.in.: oszczędności na rachunkach za energię, możliwość wykorzystania odnawialnego źródła energii, redukcja emisji szkodliwych substancji do środowiska, a także poprawa niezawodności dostaw energii. Instalacja paneli fotowoltaicznych jest prosta i nie wymaga skomplikowanej konserwacji. Warto rozważyć fotowoltaikę, aby zapewnić sobie niezawodne i ekologiczne źródło energii, a także przyczynić się do ochrony środowiska.</p>
<Link to="/wiedza/fotowoltaika">Dowiedz się więcej</Link>

</div>
</div>
</div>

<div className='element'>
    <div className='ElementInner'>
<div className='FirstSide'>

<div className='left'>
<h4>Magazyny energii</h4>
<p>Magazynowanie wyprodukowanej energii elektrycznej</p>
</div>
<div className='right'><img src={me} alt="Magazyny energii" /></div>

</div>
<div className='SecondSide'>
<h4>Magazyny energii</h4>
<p>Magazyny energii są istotnym elementem systemów fotowoltaicznych, umożliwiając skuteczne wykorzystanie energii słonecznej. Korzyści z ich stosowania to m.in.: możliwość zachowania niezbędnej energii na czas, gdy słońce nie świeci, redukcja zależności od sieci elektrycznej, zwiększenie niezawodności dostaw energii i poprawa efektywności energetycznej.</p>
<Link to="/wiedza/magazyny-energii">Dowiedz się więcej</Link>

</div>
</div>
</div>

<div className='element'>
<div className='ElementInner'>

    <div className='FirstSide'>
<div className='left'>
<h4>Pompy Ciepła</h4>
<p>Ekologiczne ogrzewanie domu.</p>

</div>
<div className='right'><img src={pc} alt="Pompy ciepła" /></div>
</div>
<div className='SecondSide'>
<h4>Pompy Ciepła</h4>
<p>Pompy ciepła to ekologiczne i oszczędne rozwiązanie do ogrzewania budynków. Korzyści z ich używania to m.in.: niższe rachunki za energię, możliwość wykorzystania energii odnawialnej, redukcja emisji szkodliwych substancji do środowiska oraz niezawodność i wysoka wydajność. Pompy ciepła są również łatwe w instalacji i konserwacji. Warto rozważyć ich zastosowanie, aby zapewnić sobie komfort i jednocześnie dbać o środowisko.</p>
<Link to="/wiedza/Pompy-ciepla">Dowiedz się więcej</Link>

</div>
</div>
</div>
</div>

<h1>Obszar działania</h1>


<div className='wrap'>
<div className='element'>
<div className='ElementInner'>

<div className='FirstSide'>

<div className='left'>
<h4>Zachodniopomorskie</h4>
<p>Obsługujemy swoim działaniem całe województwo Zachodniopomorskie</p>

</div>
<div className='right'><img className="woj" src={zachpom} alt="moduł fotowoltaiczny" /></div>
</div>
<div className='SecondSide'>
<h4>Zachodniopomorskie</h4>
<p>
<ul>
<li>Szczecin</li>
<li>Koszalin</li>
<li>Stargard</li>
<li>Świnoujście</li>
<li>Goleniów</li>
<li>Chojna</li>
<li>Police</li>
<li>Gryfino</li>
<li>Nowogard</li>
<li>i inne</li>

</ul>

</p>

</div>
</div>
</div>

<div className='element'>
    <div className='ElementInner'>
<div className='FirstSide'>

<div className='left'>
<h4>Lubuskie</h4>
<p>Obejmujemy swoim działaniem całe województwo lubuskie</p>
</div>
<div className='right'><img className="woj" src={lubuskie} alt="Magazyny energii" /></div>

</div>
<div className='SecondSide'>
<h4>Lubuskie</h4>
<p> 
<ul>
<li>Zielona Góra</li>
<li>Gorzów Wielkopolski</li>
<li>Nowa Sól</li>
<li>Międzyrzecz</li>
<li>Lubniewice</li>
<li>Żagań</li>
<li>Sulechów</li>
<li>Skwierzyna</li>
<li>Strzelce Krajeńskie</li>
<li>i inne</li>

</ul>

</p>

</div>
</div>
</div>


</div>
<div style={{display:"flow"}}>
<GetPrice/>
</div>
          </div>

         
     );
}
 
export default Services;
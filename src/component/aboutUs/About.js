import './About.css';
import React, {useEffect} from 'react';
import Navi from '../Navi';
import Askme from '../finance/Askme';
import GetPrice from '../../main/GetPrice';
import AOS from 'aos';
import 'aos/dist/aos.css';




const About = (props) => {

            
useEffect(()=>{
    AOS.init();
    window.scrollTo(0, 0)
    document.title=props.title



},[])
    return ( 
        <div className='About'>
<Navi/>
<div className='imageAbout' data-aos="fade-up"></div>

<div className='AboutLeftRight'>
<div className='left'>

    <h1 data-aos="fade-right"> O nas</h1>
    <p data-aos="fade-right">Firma ComEko powstała z myślą zapewnienia Klientom najwyższej jakości usług związanych z energią odnawialną. Naszą misją jest, aby każdy mógł zarabiać – oszczędzając.</p>


   <p data-aos="fade-right"> Comeko to firma, która zajmuje się montażem instalacji fotowoltaicznych, pompami ciepła, magazynami energii oraz ładowarkami do samochodów elektrycznych. Dzięki temu, klienci mogą zainwestować w odnawialne źródła energii i cieszyć się niezależnym źródłem energii, co przekłada się na oszczędności na rachunkach za prąd oraz na niższe koszty ogrzewania.</p>

   <p data-aos="fade-right">Firma oferuje swoje usługi zarówno klientom indywidualnym, jak i firmom, które chcą zainwestować w przyszłość i zrezygnować z tradycyjnych źródeł energii. Zespół fachowców firmy Comeko zajmuje się montażem instalacji fotowoltaicznych, które pozwalają na pozyskiwanie energii elektrycznej z promieniowania słonecznego. Dzięki temu, klienci mogą korzystać z niezależnego źródła energii, co przekłada się na oszczędności na rachunkach za prąd.</p>

   <p data-aos="fade-right">Zlecając montaż instalacji fotowoltaicznych, pomp ciepła, magazynów energii oraz ładowarek do samochodów elektrycznych w firmie Comeko, klienci inwestują w przyszłość oraz w ochronę środowiska. Dzięki tym rozwiązaniom, mogą oszczędzać na rachunkach za prąd oraz ogrzewanie, a jednocześnie przyczyniać się do zmniejszenia emisji szkodliwych gazów.</p>

</div>
<div className='right'>
<Askme/>
</div>


</div>
<GetPrice/>
            
        </div>
     );
}
 
export default About;
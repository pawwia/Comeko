import './About.css';
import React, {useEffect} from 'react';
import Navi from '../Navi';
import Askme from '../finance/Askme';
import GetPrice from '../../main/GetPrice';
import AOS from 'aos';
import 'aos/dist/aos.css';




const About = () => {

            
useEffect(()=>{
    AOS.init();
    window.scrollTo(0, 0)


},[])
    return ( 
        <div className='About'>
<Navi/>
<div className='imageAbout' data-aos="fade-up"></div>

<div className='AboutLeftRight'>
<div className='left'>

    <h1 data-aos="fade-right"> O nas</h1>

   <p data-aos="fade-right"> Jesteśmy lokalną firmą zajmującą się instalacjami fotowoltaicznymi. Nasza działalność rozpoczęła się w 2017 roku i od tego czasu wykonaliśmy wiele udanych projektów. Specjalizujemy się w montażu paneli słonecznych na terenie województwa zachodniopomorskiego i lubuskiego.</p>

   <p data-aos="fade-right">Nasze biuro znajduje się w Szczecinie i tam też pracuje nasz zespół wykwalifikowanych specjalistów, którzy zapewniają najwyższą jakość usług. Dzięki naszemu doświadczeniu i wiedzy, jesteśmy w stanie zapewnić naszym klientom nie tylko efektywne i trwałe rozwiązania, ale także doradztwo i wsparcie na każdym etapie projektu.</p>

   <p data-aos="fade-right">Naszym celem jest zapewnienie naszym klientom dostępu do niezawodnej i ekologicznej energii słonecznej. Dlatego też, zawsze dążymy do doskonałości w każdym aspekcie naszej działalności, od projektowania do montażu i serwisu.</p>

   <p data-aos="fade-right">Zaufaj nam i pozwól nam pomóc Ci wyprodukować własną, czystą i taną energię słoneczną.</p>
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
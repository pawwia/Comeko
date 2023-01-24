import React, {useEffect} from 'react';
import './Steps.css'
import AOS from 'aos';
import 'aos/dist/aos.css';





const Steps = () => {
    
useEffect(()=>{
    AOS.init();


},[])

  
    
    return (  
        <div className='Steps'>
<h1 > Prąd ze słońca na wyciągnięcie ręki! </h1>
<div className='wrap'>

<div  data-aos="fade-right" className=' monster stepelement one'>1. Audyt i projekt<div className='StepDesc'>Podczas bezpłatnego audytu sprawdzimy mozliwości obiektu, przygotujemy ofertę wraz z projektem instalacji.</div></div>
<div data-aos="fade-right"  className='stepelement two'>2.  Umowa<div className='StepDesc'>Po uzgodnieniu warunków wspołpracy podpisujemy umowę oraz ustalamy wstępny termin montazu.</div></div>
<div  data-aos="fade-right" className='stepelement three'>3.  Montaż<div className='StepDesc'>Podczas bezpłatnej konsultacji nasz doradca przygotuje ofertę, a także wyceni instalację.</div></div>
<div data-aos="fade-right" className='stepelement four'>4.  Zgłoszenie instalacji do OSD<div className='StepDesc'>Podczas bezpłatnej konsultacji nasz doradca przygotuje ofertę, a także wyceni instalację.</div></div>
<div data-aos="fade-right" className='stepelement five'>5.  Złozenie wniosku o dotację<div className='StepDesc'>Podczas bezpłatnej konsultacji nasz doradca przygotuje ofertę, a także wyceni instalację.</div></div>
<div data-aos="fade-right" className='stepelement six'>6.  Uytkowanie i serwis<div className='StepDesc'>Podczas bezpłatnej konsultacji nasz doradca przygotuje ofertę, a także wyceni instalację.</div></div>

</div>
        </div>
    );
}
 
export default Steps;
import React, {useEffect} from 'react';
import './WhyWe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation, faPersonDigging, faTruckFast, faFolderOpen, faHammer, faBusinessTime, faBus} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
const WhyWe = () => {

    useEffect(()=>{
        AOS.init();
    
    
    },[])
    return ( 
        <div className='WhyWe'>
<div className='photoWhyWe' data-aos="fade-right"></div>
<div className='descWhyWe' data-aos="fade-left">  <h1>Dlaczego my?</h1> 
<p>Szukając doświadczonego wykonawcy instalacji fotowoltaicznych i pomp ciepła, warto zwrócić uwagę na kilka istotnych kwestii. W Comeko oferujemy kompleksową obsługę naszych klientów, pomagając im w wyborze najlepszych rozwiązań dla ich biznesu. Oto kilka elementów, na które warto zwrócić uwagę w procesie decyzyjnym: </p>
<div className='arguments'>
<div className='element'>
<div className='icon'><FontAwesomeIcon icon={faMapLocation} size="4x" inverse /></div>
<div className='desc'>Lokalna firma</div>
</div>

<div className='element'>
<div className='icon'><FontAwesomeIcon icon={faBusinessTime} size="4x" inverse /></div>
<div className='desc'>Na rynku od 2017 roku</div>
</div>

<div className='element'>
<div className='icon'><FontAwesomeIcon icon={faPersonDigging} size="4x" inverse /></div>
<div className='desc'>Własne ekipy montazowe</div>
</div>

<div className='element'>
<div className='icon'><FontAwesomeIcon icon={faTruckFast} size="4x" inverse /></div>
<div className='desc'>Krótkie terminy montazu</div>
</div>

<div className='element'>
<div className='icon'><FontAwesomeIcon icon={faHammer} size="4x" inverse /></div>
<div className='desc'>Szybki serwis w razie awarii</div>
</div>

<div className='element'>
<div className='icon'><FontAwesomeIcon icon={faFolderOpen} size="4x" inverse /></div>
<div className='desc'>Pełna dokumentacja po naszej stronie</div>
</div>
</div>

</div>
</div>

     );
}
 
export default WhyWe;
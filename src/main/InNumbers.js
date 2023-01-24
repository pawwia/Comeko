import React from 'react';
import { Link } from 'react-router-dom';
import './InNumbers.css';
import CountUp from 'react-countup'

const InNumbers = () => {
    return ( 
        <div className='inNumbers'>
                    <div className='blur'>

<h1> Comeko w Liczbach</h1>
<div className='wrapNumbers'>
<div className='Element'>
<div className='ElNumber'><CountUp  end={6} duration={0.8} enableScrollSpy={1}/> lat</div>
<div className='ElTitle'>na rynku </div>
</div>

<div className='Element'>
<div className='ElNumber'><CountUp end={20000} duration={3} enableScrollSpy={1}/>+</div>
<div className='ElTitle'>Zamontowanych modułów</div>
</div>

<div className='Element'>
<div className='ElNumber'><CountUp end={800} duration={3} enableScrollSpy={1}/>+</div>
<div className='ElTitle'>Zadowolonych klientów</div>
</div>

<div className='Element'>
<div className='ElNumber'><CountUp end={20} duration={3} enableScrollSpy={1}/> dni</div>
<div className='ElTitle'>Średni czas oczekiwania na montaz</div>
</div>

<div className='Element'>
<div className='ElNumber'><CountUp end={1190} duration={3} enableScrollSpy={1}/> </div>
<div className='ElTitle'>ton zaoszczędzonego CO2 dzięki PV</div>
</div>

<div className='Element'>
<div className='ElNumber'><CountUp end={4400} duration={3} enableScrollSpy={1}/>+</div>
<div className='ElTitle'>Zamontowanych kW instalacji</div>
</div>



</div>

</div>
</div>

     );
}
 
export default InNumbers;
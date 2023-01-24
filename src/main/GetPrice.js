import React, {useState,useEffect} from 'react';
import './GetPrice.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const GetPrice = () => {
    const [ name,setName]=useState(null);
    const [ tel,setTel]=useState(null);
    const [ reg,setReg]=useState(false);
        
useEffect(()=>{
    AOS.init();


},[])
    const handleCallMe=()=>{

const data={
    name:name,
    tel:tel,
    reg:reg,
}

    }

    return ( 

        <div className='GetPrice'>
<h1> Zamów <b>bezpłatną wycenę!</b></h1>
<div data-aos="fade-up" className='wrap'>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Imię"/>
<input type="text" value={tel} onChange={(e)=>setTel(e.target.value)} placeholder="nr. Telefonu"/>
<div className='agree'>
    
<input type="checkbox" value={reg} onChange={(e)=>setReg(e.target.value)}/>
<p>
Wyrażam zgodę na przetwarzanie moich danych osobowych przez Comeko Sp. z o.o. w celu nawiązania ze mną kontaktu telefonicznego i przedstawienia mi oferty handlowej.


</p>
</div>
<button onClick={handleCallMe}>Zamawiam</button>


</div>


        </div>
     );
}
 
export default GetPrice;
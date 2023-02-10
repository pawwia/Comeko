import React, {useState,useEffect} from 'react';
import './GetPrice.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { act } from 'react-dom/test-utils';

const url='http://localhost/ComekoMail/sendmail.php';
const sendForm=async(url,data)=>{

    const resp=await fetch(url,{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }     });
      const json = await resp.json();
        return json;
    }


const GetPrice = () => {
    const [ name,setName]=useState(null);
    const [ tel,setTel]=useState(null);
    const [ reg,setReg]=useState(false);
    const [message,setMessage]=useState(false);
    const [actSend,setActSend]=useState(true);
    const [error,setError]=useState(null);

        
useEffect(()=>{
    AOS.init();


},[])
    const handleCallMe=()=>{

setError(null);
if(reg===false)
{
    setError("Nie wyrazono zgody na przetwarzanie danych osobowych. Zaznacz zgodę i spróbuj ponownie.")
}
else if((tel.length<9)||(tel.length===undefined))
{
setError("Wprowadzono niepoprawny numer telefonu. Popraw numer i spróbuj ponownie.")
}
else if(name.length<3)
{
    setError("Wprowadzono zbyt krótkie imię. Popraw pole imię i spróbuj ponownie.")

}
else{
    setActSend(false);
    setMessage('Proszę czekać...')
const data={
    name:name,
    tel:tel,
    reg:reg,
}



    

    const sform= sendForm(url,data)
    if(sform)
    {
        sform.then((result)=>{
if(result.rezultat===1)
{
    setMessage("Wiadomość wysłana. Skontaktujemy się z Państem najszybciej jak to będzie mozliwe. ")

}
else setMessage("Nie udało się wysłać wiadomości. Spróbuj ponownie później")

        })
    }


    


}



    }

    return ( 

        <div className='GetPrice'>
<h1> Zamów <b>bezpłatną wycenę!</b></h1>
<div data-aos="fade-up" className='wrapa'>
{actSend?<><input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Imię"/>
<input type="text" value={tel} onChange={(e)=>setTel(e.target.value)} placeholder="nr. Telefonu"/>
<div className='agree'>
    
<input type="checkbox" value={reg} onChange={(e)=>setReg(e.target.value)}/>
<p>
Wyrażam zgodę na przetwarzanie moich danych osobowych przez Comeko Sp. z o.o. w celu nawiązania ze mną kontaktu telefonicznego i przedstawienia mi oferty handlowej.


</p>
</div>
{error?<div className='error'>{error}</div>:null}

<button onClick={handleCallMe}>Zamawiam</button>


</>:null}
{message?<div className='sendMsg'>{message}</div>:null}

</div>


        </div>
     );
}
 
export default GetPrice;
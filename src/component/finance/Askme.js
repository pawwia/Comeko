import React, {useState, useEffect} from 'react';
import './Askme.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const url='http://localhost/ComekoMail/sendAskMe.php';
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


const Askme = () => {

            
useEffect(()=>{
    AOS.init();


},[])
    const [step,setStep]=useState(1);
    const [error,setError]=useState(null);
    const [zipCode,setZipCode]=useState("");
    const [messages,setMessages]=useState("");
    const [message,setMessage]=useState(null);

    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const [rules,setRules]=useState(false);

    const [actSend,setActSend]=useState(true);


    const [pvi,setPvi]=useState(0);
    const [pvc,setPvc]=useState(0);
    const [pvw,setpvW]=useState(0);
    const [hp,setHp]=useState(0);
    const [es,setEs]=useState(0);
    const [cc,setCc]=useState(0);

const step1=()=>{

    if(pvi||pvc||pvw||hp||es||cc)
    {
setError(null)
setStep(2);

    }
    else setError("Zaznacz zakup czego planujesz! ")
}

const step2=()=>{

   if ( messages && zipCode)
   {
    setError(null);
    if (!zipCode.match(/^\d\d-\d\d\d$/)) {
setError("Wprowadzono niepoprawny kod pocztowy. Spróbuj jeszcze raz.")
    }

    else {

        setError(null);
        setStep(3);
    }

   }
   else 
   {
    setError("Wypełnij poprawnie wymagane pola.")
   }
}

const step3=()=>{
setError(null);
if(rules===false)
{
    setError("Nie wyrazono zgody na przetwarzanie danych osobowych. Zaznacz zgodę i spróbuj ponownie.")
}
else if((number.length<9)||( number.length===undefined))
{
setError("Wprowadzono niepoprawny numer telefonu. Popraw numer i spróbuj ponownie.")
}
else if(email.length<3)
{
    setError("Wprowadzono zbyt krótki adres email. Popraw go i spróbuj ponownie.")

}
else {
    setMessage("Trwa ładowanie....");
    setStep(4);

const data={


    num:number,
    email:email,
    zipCode:zipCode,
    message:messages,
    pvi:pvi?"Instalacja pv indywidualna : Tak ":"Instalacja pv indywidualna : Nie ",
    pvc:pvc?"Instalacja pv firmowa : Tak ":"Instalacja pv firmowa : Nie ",
    pvw:pvw?"Instalacja pv bez montazu : Tak ":"Instalacja pv bez montazu : Nie ",
    hp:hp?"Pompa Ciepła: Tak ":"Pompa Ciepła: Nie ",
    es:es?"Magazyny energii : Tak ":"Magazyny energii : Nie ",
    cc:cc?"Ładowarka samochodowa : Tak ":"Ładowarka samochdowa : Nie ",


}
const sform= sendForm(url,data)
if(sform)
{
    sform.then((result)=>{
if(result.rezultat===1)
{
setMessage("Wiadomość wysłana. Skontaktujemy się z Państem najszybciej jak to będzie mozliwe. ");


}
else {

    setMessage("Nie udało się wysłać wiadomości. Spróbuj ponownie później")

}
    })
}



}

}
    return (

        <div className='Ask' data-aos="fade-left">

<div className='quest' >
{step===1?
<div className='step'>
<p> Jaki zakup planujesz?</p>
<input type={'checkbox'} value={pvi} onChange={(e)=>setPvi(e.target.value)}/> Instalacja fotowoltaiczna - prywatnie<br/>
<input type={'checkbox'} value={pvc} onChange={(e)=>setPvc(e.target.value)}/> Instalacja fotowoltaiczna - firma<br/>
<input type={'checkbox'} value={pvw} onChange={(e)=>setpvW(e.target.value)}/> Instalacja fotowoltaiczna bez montazu<br/>
<input type={'checkbox'} value={es} onChange={(e)=>setEs(e.target.value)}/> Magazyn energii<br/>
<input type={'checkbox'}value={hp} onChange={(e)=>setHp(e.target.value)}/> Pompa ciepła<br/>
<input type={'checkbox'} value={cc} onChange={(e)=>setCc(e.target.value)}/> Ładowarka samochodowa<br/>
{error?<div className='error'>{error}</div>:null}

<button onClick={step1}>Dalej</button>
</div>:
step===2?
<div className='step'>
<p> Powiedz nam więcej o swoim projekcie!</p>
<div className='tellUs'>
{pvi||pvc||pvw?<div className='element'><p>Instalacja fotowoltaiczna </p>

<ul>
<li>Lokalizacja: dach czy grunt</li>
<li>Jeśli dach:</li>
<ul>
    <li>Pochylenie dachu </li>
    <li>Pokrycie dachu </li>
    <li>Kierunek pochylenia połaci </li>
    <li>Występowanie zacienienia </li>
</ul>
<li>Zużycie roczne prądu lub kwota rachunku miesięcznego za prąd</li>
<li> Jeśli znasz- moc planowanej instalacji</li>
<li> Im więcej szczegółów podasz - tym dokładniejsza wycena będzie</li>
</ul>
</div>:null}

{hp?<div className='element'><p>Pompa ciepła</p>
<ul>
<li>powierzchnia użytkowa, ilość kondygnacji</li>
<li>z czego zbudowany jest budynek?</li>
<li>Grubość ścian</li>
<li>Grubość ocieplenia</li>
<li>Ilość i typ okien ( dwuszybowe, trzyszybowe) </li>
<li>Typ oraz grubość izolacji dachu</li>
<li>Typ oraz grubość izolacji podłogi</li>
<li>Rodzaj ogrzewania (podłogowe, kaloryfery)</li>
<li>Pref. temp w mieszkaniu zimą - domyślnie 21 stopni</li>
<li>Dotychczasowe ogrzewanie - np. moc obecnego pieca, zuzycie ekogroszku, gazu itp. </li>

</ul>

</div>:null}

{es?<div className='element'><p>Magazyny energii</p>
<ul>
<li>Jeśli znasz- Pojemność magazynu energii</li>
<li>Model obecnego falownika </li>
<li>Moc oraz rodzaj obecnych modułów fotowoltaicznych </li>
<li>Czy planujesz rozbudowę instalacji?  </li>


</ul>

</div>:null}

{cc?<div className='element'><p>Ładowarki samochodowe</p>
<ul>
    <li>Jeśli znasz- Moc ładowarki</li>
    <li> Typ auta, maksymalny prąd ładowania </li>
    <li>Typ instalacji w domu (jednofazowa, trójfazowa) </li>

</ul>
</div>:null}
    </div>
<textarea placeholder='Dodatkowe informacje' value={messages} onChange={(e)=>setMessages(e.target.value)}></textarea><br/>
Kod pocztowy:
<input type="text"  value={zipCode} pattern="^[0-9]{2}-[0-9]{3}$" onChange={(e)=>setZipCode(e.target.value)} placeholder="np. 71-770" />
{error?<div className='error'>{error}</div>:null}

<button onClick={step2}>Wyślij</button>
    </div>
:step===3?
<div className='step'>
<p>Twoje dane kontaktowe</p>
Adres e-mail: <br/><input  type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
Numer telefonu:
<br/><input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/><br/>
<input value={rules} onChange={(e)=>setRules(e.target.checked)} type="checkbox"/> Akceptuję politykę prywatności i regulamin serwisu.
{error?<div className='error'>{error}</div>:null}
<button onClick={step3}>Wyślij</button>


</div>
:step===4?<div className='step'>

{message?<div className='message'>{message}</div>:null}



</div>:null
}

</div>

      </div>
      );
}
 
export default Askme;

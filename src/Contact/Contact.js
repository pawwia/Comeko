import React, {useState, useEffect} from 'react';
import './Contact.css'
import Navi from '../component/Navi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faMobileScreen, faEnvelope, faBriefcase , faScrewdriverWrench, faPhone  } from '@fortawesome/free-solid-svg-icons';


const url='http://localhost/ComekoMail/sendContactForm.php';
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


const Contact = (props) => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[tel,setTel]=useState("");
    const[text,setText]=useState("");
    const[rules,setRules]=useState(false);
    const[error,setError]=useState(false);
    const[message,setMessage]=useState(false);
    const [actSend,setActSend]=useState(true);

useEffect(()=>{

    window.scrollTo(0, 0);
    document.title=props.title

},[])
const handleEmail=()=>{

setError(null)
if(rules===false)
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
else if(email.length<4)
{
    setError("Wprowadzono zbyt krótki email. Popraw pole E-mail i spróbuj ponownie.")

}
else if(text.length<5)
{
setError("Nie wprowadzono treści wiadomości. Wprowadź treść i spróbuj ponownie.")
}
else{
setError(null);
setActSend(false);
setMessage('Proszę czekać...')

const data={

    name:name,
    email:email,
    tel:tel,
    text:text,

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
        <div className='Contact'>
            <div className="headercon">
            <div className="blur">

            <Navi/>

            </div>

            </div>
<h1 className="ttre"> Skontaktuj się z nami</h1>
    <p className="ttre">Zapraszamy do kontaktu z COMEKO. Chętnie odpowiemy na Państwa zapytania telefoniczne i mailowe, zachęcamy także do skorzystania z poniższego formularza kontaktowego:</p>

<div className='ContactWrap'>
    <div className='left'>
     {actSend? <>
<h2> Formularz kontaktowy</h2>
<input type="text" placeholder='Imię' value={name} onChange={(e)=>setName(e.target.value)}/>
<input type="text" placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type="text" placeholder='Telefon' value={tel} onChange={(e)=>setTel(e.target.value)}/>
<textarea placeholder='Treść' value={text} onChange={(e)=>setText(e.target.value)}></textarea>
<input type="checkbox" value={rules} onChange={(e)=>setRules(e.target.checked)} name="rules"/>
<label for="rules">
Zapoznałem się z Polityką prywatności serwisu www.comeko.pl oraz wyrażam zgodę na przetwarzanie przez COMEKO SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, ul. Kresowa 32, 71-770 Szczecin, udostępnionych przeze mnie danych osobowych na zasadach opisanych w Polityce prywatności dostępnej w Serwisie. Oświadczam, że są mi znane cele przetwarzania danych oraz moje uprawnienia. Niniejsza zgoda może być wycofana w dowolnym czasie poprzez kontakt z Administratorem pod adresem ppa@comeko.pl, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Więcej informacji dotyczących przetwarzania danych osobowych - Obowiązek Informacyjny
    </label>
    <div className='error'>{error?error:null}</div>

    <button onClick={handleEmail}>Wyślij</button>

    </>:null}
{message? <div className='message'>{message}</div>:null}
    </div>
<div className='right'>
<div className='rightLeft'>
<div className='adress'>
    <h2> Biuro</h2>
    <b>ComEko Sp. z o.o.</b>
    <br/> ul. Kresowa 32
    <br/> 71-770 Szczecin

    <br/>    <br/>
Godziny otwarcia: <br/>
Pon. - Pt: 9:00 - 17:00<br/>
<FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:comeko@comeko.pl">comeko@comeko.pl</a>
<br/>
<FontAwesomeIcon icon={faMobileScreen}/>  <a href="tel:+48577790070">+48 577 790 070</a>
</div>

<div className='Data'>
<h2>Nasze dane</h2>
NIP: 9552449398<br/>

REGON: 368984830<br/>

KRS: 0000709182<br/>

Sąd Rejonowy Szczecin-Centrum<br/>

XIII Wydział Gospodarczy KRS<br/>

Kapitał zakładowy: 285 000 zł<br/>


</div>
</div>
<div className='rightright'>
<div className='sales'>
    <h2> Sprzedaż</h2>
    <b>Paweł Wiatrak</b><br/>
    Doradca techniczno- handlowy<br/>
    <FontAwesomeIcon icon={faMobileScreen}/>  <a href="tel:+48577909330">+48 577 909 330</a><br/>
    <FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:p.wiatrak@comeko.pl">p.wiatrak@comeko.pl</a>


</div>
<div className='sales'>
    <h2> Serwis</h2>
    <b>Wojciech Posłuszny</b><br/>
    Doradca techniczno-serwisowy<br/>
    <FontAwesomeIcon icon={faMobileScreen}/>  <a href="tel:+48577909330">+48 724 662 661</a><br/>
    <FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:wposluszny@comeko.pl">wposluszny@comeko.pl</a>


</div>


</div>
</div>

</div>
        </div>
     );
}
 
export default Contact;
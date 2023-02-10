import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone  } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return ( 
        <div className='footer'>
<div className='firstLineFooter'>
<div className='FLFElement'>
<h2>Comeko Sp. z o.o.</h2>
<p>
Ul. Kresowa 32 <br/>
71-772, Szczecin <br/><br/>
NIP: 9552449398<br/>
REGON: 368984830<br/>
KRS: 0000709182<br/><br/>
Sąd Rejonowy Szczecin-Centrum<br/>
XIII Wydział Gospodarczy KRS<br/>
Kapitał zakładowy: 285 000 zł<br/>

</p>


</div>
<div className='FLFElement'>
    <h2> Mapa strony</h2>
<ul>
<li><Link to='/o-nas'>O nas</Link></li>
<li><Link to='/uslugi'>Usługi</Link></li>
<li><Link to='/portfolio'>Portfolio</Link></li>
<li><Link to='/wiedza'>Wiedza</Link></li>
<li><Link to='/finansowanie'>Finansowanie</Link></li>
<li><Link to='/kontakt'>Kontakt</Link></li>

</ul>


</div>
<div className='FLFElement'>
<h2>Skontaktuj się</h2> 
<FontAwesomeIcon icon={faPhone} inverse size="2x"/><a style={{display:'inline-block'}} href="tel:577790070">577 790 070</a> <br/>
<FontAwesomeIcon icon={faEnvelope} inverse size="2x"/><a  style={{display:'inline-block'}} href="mailto: comeko@comeko.pl">comeko@comeko.pl</a> 

</div>

</div>
<div className='SecondLineFooter'>
<Link to='/polityka-prywatnosci'>polityka prywatności</Link>
< a href="" >Projekt i realizacja</a>
Wszystkie prawa zastrzezone 
</div>

        </div>
     );
}
 
export default Footer;
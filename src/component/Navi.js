import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Header/logo.png';
import './Navi.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';


const Navi = () => {
    const[phoneMenu, setPhoneMenu]=useState(false);

    return ( 
        <>
        <div className='Nav'>
<Link className="img" to="/" ><img src={logo} alt="logo"/></Link>
<div className='navBut'>
<Link to='/'>Start</Link>

<Link to='/o-nas'>O nas</Link>

<Link to='/uslugi'>Usługi</Link>
<Link to='/portfolio'>Realizacje</Link>
<Link to='/wiedza'>Wiedza</Link>
<Link to='/finansowanie'>Finansowanie</Link>
<Link to='/kontakt'>Kontakt</Link>

</div>

</div>

<div className='openMenuPhone' onClick={()=>setPhoneMenu(1)}><FontAwesomeIcon icon={faBars} size="3x" inverse/></div>
{phoneMenu?<div className='phoneMenu'>
    <div className="bar" onClick={()=>setPhoneMenu(0)}><FontAwesomeIcon size="3x" inverse icon={faX}/></div>
    <Link to='/'>Start</Link>

<Link to='/o-nas'>O nas</Link>
<Link to='/uslugi'>Usługi</Link>
<Link to='/portfolio'>Portfolio</Link>
<Link to='/wiedza'>Wiedza</Link>
<Link to='/finansowanie'>Finansowanie</Link>
<Link to='/kontakt'>Kontakt</Link>
</div>:null}
</>
     );
}
 
export default Navi;
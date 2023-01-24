import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navi from '../component/Navi';
const Header = () => {
    return ( 
<div className="wrapNavAndHeader">

<div className='header'>

<Navi/>
<div className='headerInfo'>
    <h1>Witaj w COMEKO!</h1>
    <h3> Z nami zaoszczędzisz na rachunkach za prąd! </h3>
    <Link to='/kontakt'>Skontaktuj się z nami! </Link>
</div>

</div>
</div>
     );
}
 
export default Header;

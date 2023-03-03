import './Articles.css'
import React,{useEffect} from 'react';
import Navi from '../../Navi';
import GetPrice from '../../../main/GetPrice';
import Askme from '../../finance/Askme';
import { Link } from 'react-router-dom';
const Articles = (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    document.title=props.title;
    
    },[])
    return ( 
        <div className='Articles'>
<Navi/>
<div className='contentArt'>
<h2>{props.title}</h2>
<div className='ContentAllArt'>
<div className='ContentLeft'>
<h3>{props.tit1}</h3>
<p>{props.par1}</p>
<p>{props.par2}</p>
<p>{props.par3}</p>
</div>
<div className='ContentRight'>
<img src={props.img} alt={props.title}/>


</div>

</div>

<div className='ContentAllArt'>


<div className='ContentRight'><Askme/></div>

<div className='ContentLeft knowMore'>
<p> Chcesz wiedzieć więcej na temat {props.knowMore} lub poznać naszą ofertę?</p>
<p> Wypełnij formularz obok lub skontaktuj się z nami. 
</p>
<Link to="/kontakt">Kontakt</Link>

</div> 
</div>



</div>

<GetPrice/>

        </div>
     );
}
 
export default Articles;
import React,{useEffect} from 'react';
import './Main.css';
import Header from './Header';
import InNumbers from './InNumbers';
import Reviews from './Reviews';
import GetPrice from './GetPrice';
import Steps from './Steps';
import WhatWeDo from './WhatWeDo';
import WhyWe from './WhyWe';

const Main = () => {
                
useEffect(()=>{
    window.scrollTo(0, 0)


},[])
    return ( 
        <div className="main">
<Header/>
<WhatWeDo/>
<WhyWe/>
<Steps/>
<GetPrice/>
<InNumbers/>

<Reviews/>

        </div>
     );
}
 
export default Main;
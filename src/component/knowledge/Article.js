import './Article.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => {
    return ( 
        <Link to={props.to}className='Article'>
<div className='photoText'>
<img src={props.img} alt='title'/>
<div className='overlay'>
    <div className='text'>
        <p>{props.text}</p>
    </div>
</div>

</div>
<div className='title'><h3>{props.name}</h3></div>

        </Link>
     );
}
 
export default Article;
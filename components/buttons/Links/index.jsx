import React from 'react';
import './style.css';

export default function Link({ href, display, style }){
    return <a href={href} className={`link ${style? style:'nude'}`}>{display}</a>
}


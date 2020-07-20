import React, { useEffect } from 'react';
import './style.css';

export default function Container({ children, style }) {

    style = { margin:'0 auto', textAlign:'center', ...style }

    // need to add media queries in JS an remove css
    useEffect(() => null,[]);

    return (
        <section className='Container' style={style}>
            {children}
        </section>
    )
}

 Container;
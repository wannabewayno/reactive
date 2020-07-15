import React, { useEffect } from 'react';
import './style.css';

const Container = ({ children, style }) => {

    style = { margin:'0 auto', textAlign:'center', ...style }

    useEffect(() => console.log(style),[]);

    return (
        <section className='Container' style={style}>
            {children}
        </section>
    )
}

export default Container;
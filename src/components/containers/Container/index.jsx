import React from 'react';
import './style.css';

const Container = ({ children, style }) => {
    if(!style) style = {};

    console.log(style);

    return (
        <section className='Container' style={style}>
            {children}
        </section>
    )
}

export default Container;
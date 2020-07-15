import React, { cloneElement } from 'react';
import './style.css';

const Container = ({ children, style }) => {
    if(!style) style = {};

    return (
        <section className='Container' style={style}>
            {children.map((child,index) => cloneElement(child,{ key:index }))}
        </section>
    )
}

export default Container;
import React from 'react';
import './style.css';
import LinkContainer from '../LinkContainer';

function Header({ title, links, position = 'relative', height = '50px'}){

    const style = { height, position }

    return (
        <header className='Header' style={style}>
            {title?<h1>{title}</h1>:undefined}
            {links?<LinkContainer links={links}/>:undefined}
        </header>
    )
}

export default Header;
import React from 'react';
import './buttons.css';
import buttonSize from './iconSize';
import buttonPosition from './buttonPosition';
import iconSize from './iconSize';
import baseStyle from './style';

function Button({ size='tiny', position='', icon='', skin='nude-button', type='button'}){

    const buttonCSS = { ...baseStyle,...buttonSize(size), ...buttonPosition(position), ...getSkin(skin) };

    return (
        <button type={type} style={buttonCSS}>
            {children?children.map(child => (<span>{child}</span>)):null}
            {icon!==''?<img src={getIcon}></img>:null}
        </button>
    )
}

export default Button;



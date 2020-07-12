import React from 'react';
import './buttons.css';
import buttonSize from './iconSize';
import buttonPosition from './buttonPosition';

function Button({ size = 'tiny', id = '', position = '', buttonText = '', style = 'nude-button', children }){

    const CSS = { ...buttonSize(size), ...buttonPosition(position) };

    return (
        <button id={id} className={`${style}`} type="button" style={CSS}>
            {buttonText ?<span className='btn-text'>{buttonText}</span>:undefined}
            {children}
        </button>
    )
}

export default Button;



import React from 'react';
import buttonSize from './buttonSize.js';
import buttonPosition from './buttonPosition.js';
import iconSize from './iconSize';
import { baseStyle, textStyle ,getSkin } from './styles/style';
import getIcon from './icons';
import onHover from '../../../../events/onHover'
import onActive from '../../../../events/onActive'


function Button({ size='tiny', position='', color='', icon='', skin='default', type='button', style={}, children}){

    const { normalStyle, hoverStyle, activeStyle } = getSkin(skin);

    const buttonStyle = { ...baseStyle, ...buttonSize(size), ...buttonPosition(position), ...normalStyle, ...style };

    return (
        <button {...onHover(hoverStyle)} {...onActive(activeStyle)} style={buttonStyle} type={type}>
            {children?<span style={textStyle}>{children}</span>:null}
            {icon!==''?<img src={getIcon}></img>:null}
        </button>
    )
}

export default Button;



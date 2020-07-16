import React from 'react';
import './style.css';
import iconSize from '../Button/iconSize.js';
import Button from '../Button/index.jsx';
import closeIcon from './close-icon.png';


export default function CloseButton(props){

    return (
        <Button {...props}>
            <img src={closeIcon} alt="close button" style={iconSize('small')}/>
        </Button>
    )
}

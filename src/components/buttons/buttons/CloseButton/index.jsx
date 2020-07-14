import React from 'react';
import './style.css';
import iconSize from '../Button/iconSize.js';
import Button from '../Button/index.jsx';


export default function CloseButton(props){

    return (
        <Button {...props}>
            <img src="./images/icons/close-icon.png" alt="close button" style={iconSize('small')}/>
        </Button>
    )
}

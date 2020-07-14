import React from 'react';
import './style.css';
import iconSize from '../Button/iconSize.js';
import Button from '../Button/index.jsx';

export default function SendButton(props) {
    return (
    <Button {...props}>
        <img src="./images/icons/paper-plane-trail.png" alt="send button" style={iconSize(props.size)}/>
    </Button>
    )
} 
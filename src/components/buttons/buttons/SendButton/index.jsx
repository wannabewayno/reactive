import React from 'react';
import './style.css';
import iconSize from '../Button/iconSize.js';
import Button from '../Button/index.jsx';
import paperPlaneTrail from './paper-plane-trail.png';

export default function SendButton(props) {
    return (
    <Button {...props}>
        <img src={paperPlaneTrail} alt="send button" style={iconSize(props.size)}/>
    </Button>
    )
} 
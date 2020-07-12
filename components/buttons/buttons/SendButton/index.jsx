import React from 'react';
import './style.css';
import iconSize from '../iconSize'
import Button from '../button'

export default function SendButton(props) {
    return (
    <Button {...props}>
        <img src="./images/icons/paper-plane-trail.png" alt="send button" style={iconSize(props.size)}/>
    </Button>
    )
} 
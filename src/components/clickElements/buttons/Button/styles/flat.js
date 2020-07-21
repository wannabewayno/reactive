import destructureColour from '../../../../../lib/destructureColour.js';

export default function flatStyle(colourString) {
    
    const colour = destructureColour(colourString);
    const baseColour = colour.clone().toString();
    const hoverColour = colour.clone().darken(5).toString()
    

    const normalStyle = {
        margin: '0.5rem',
        padding: '0.5em 0.75em',
        color: '#FFF',
        backgroundColor: baseColour,
    }

    const hoverStyle = {
        backgroundColor: hoverColour,
    }

    const activeStyle = {
        outline: 'none',
        transform: 'scale(0.95)'
    }

    return { normalStyle, hoverStyle, activeStyle }
}
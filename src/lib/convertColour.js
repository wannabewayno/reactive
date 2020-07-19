import destructureColor from './destrucutreColour.js';
import HSL2RGB from './HSL2RGB.js';
import RGB2HSL from './RGB2HSL.js';

/**
 * Converts a CSS colour string into another color string of desired type
 * @param  {String} colourString - css color string //? e.g rgb(112,45,230)|hsla(100,100%,30%,0.6) 
 * @param  {String} convertTo - lowercase type rgb|hsl
 * @return {String} - a new colour string of desired type
 */
export default function convertColour(colourString, convertTo){

    const colour = destructureColor(colourString);

    // if same colour type return the originial string
    if(colour.type === convertTo){
        return colourString
    }

    //check for alpha
    const alpha = colour.channels[3]?colour.channels[3]:1

    switch(convertTo){
        case'rgb':
            const [R,G,B] = HSL2RGB(...colour.channels);
            return = `rgba(${R},${G},${B},${alpha})`
        case'hsl':
            const [H,S,L] = RGB2HSL(...colour.channels);
            return `hsla(${H},${S}%,${L}%,${alpha})`
        default:
            return `hsla(0,0,100%,1)`
    }
}
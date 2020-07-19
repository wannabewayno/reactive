import HSL2RGB from './HSL2RGB.js';
import RGB2HSL from './RGB2HSL.js';


export default class Colour {
    constructor(type, channels){
        this.type = type;
        this.channels = channels;
        this.alpha = channels[3]? channels[3]:1
    }

    /**
     * Turns a colour object into a CSSStyle string;
     * @param  {Object} colour
     * @param  {String} [colour.type] - colour format //? rgb|hsl
     * @param  {Array}  [colour.channels] - values of each channel //? [255,40,113,1]
     * @return {String} - css colour string //? rgba(255,40,113,1)
     */
    restructure() {

        switch(type){
            case'rgb':
                const [R,G,B] = channels;
                return `rgba(${R},${G},${B},${this.alpha})`
            case'hsl':
                const [H,S,L] = channels;
                return `hsla(${H},${S}%,${L}%,${this.alpha})`
            default: 
                return console.warn('Error: unpassable colour type');
        }

    }

    /**
     * Converts a colour from one format to another
     * @param  {String} convertTo - convert to format? //? rgb|hsl
     */
    convert(convertTo){

        // if same colour type, do nothing 🤷
        if(this.type === convertTo){
            return 
        }

        switch(convertTo){
            case'rgb':
                this.channels = HSL2RGB(...this.channels);
                this.type = 'rgb'
            case'hsl':
                this.channels = RGB2HSL(...this.channels);
                this.type = 'hsl'
            default:
                console.warn("convert doesn't recognise this as a colour to convert to")
        }
    }
}
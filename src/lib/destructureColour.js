/**
 * @param  {String} - A CSS colorString //? Example rgba(112,76,132,1);
 * @return {Object} - An object of keys 'type'(the colour) and 'channels'(values of each channel). 
 */
export default function destructureColour(colourString) {

    //gaurd clause for default colour
    if(colourString===''){
        return
    }

    //use regex to get the digits into an array [ch1,ch2,ch3,alpha]
    const channels = colourString.match(/\d+(\.?\d+)?/g);

    //use regex to get the letters, get rid of the 'a' for alpha, we'll always set this as default 1
    const type = (colourString.match(/[b-z]+|[B-Z]+/g))[0].toLowerCase();

    //return an object with channels and description
    return { type, channels };
}
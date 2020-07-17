export function toRad(degrees) {
    return degrees*Math.PI/180;
}

export function toDeg(radians) {
    return radians*180/Math.PI;
}

export function destructureUnit(unitString){
    const value = Number(unitString.match(/^[-]?\d+/g));
    const unit  = (unitString.match(/[a-z]+/g)||[])[0];
    return { value, unit }
}

export function defaultRadius(calibratedLetters){
    console.log(calibratedLetters);
    const value = calibratedLetters.reduce(
        (accumulator, currentValue) => accumulator + currentValue.width
        ,0)*2/Math.PI;
    const unit = 'px'
    
    return { value, unit };
}

export function getChararcterDimensions(letters, wordSpacing, letterSpacing) {
    return letters.map(letter => {
        let width;
        let height;
        if(letter.letter === ' ') {
            const fontSize = getComputedStyle(letter.ref.current)['font-size'];
            width = Number((wordSpacing||fontSize).replace('px','')) * 0.25;
            height = Number(fontSize.replace('px',''));
        } else {
            width = Number(getComputedStyle(letter.ref.current)['width'].replace('px','')) +  letterSpacing.value
            height = Number(getComputedStyle(letter.ref.current)['height'].replace('px',''));
        };

        return { ...letter, width, height }
    })
}

export function calculateStepAngles(letters, radius) {
    let totalAngle = 0;
    
    letters = letters.map((letter,index) => {
        
        const thisLetter = { ...letter };
        const nextLetter = letters[index+1]?{ ...letters[index+1] }:{ ...letter };
        
        const Angle1 = toDeg(Math.atan((thisLetter.width)/2 / (radius.value - thisLetter.height/2)));
        const Angle2 = toDeg(Math.atan((nextLetter.width)/2 / (radius.value - nextLetter.height/2)));
      
        const stepAngle = Angle1 + Angle2;
        totalAngle += stepAngle;
        return { ...thisLetter, stepAngle };
    })

    return [totalAngle, letters];
}

export function loadValues(letters, totalAngle, radius, offset, underneath) {

    let angle = 90 + offset.value

    angle -= totalAngle/2;

    let adjust = 90;
    if(underneath) {
        angle -= 180;
        adjust += 180;
    }

    letters.forEach(letter => {
        let { stepAngle } = letter;

        const letterElement = letter.ref.current;

        letterElement.style.top  = `calc(50% - ${radius.value * Math.sin(toRad(angle))}px)`;
        letterElement.style.left = `calc(50% - ${radius.value * Math.cos(toRad(angle))}px)`;
        letterElement.style.transform = `translate(-50%,-50%) rotateZ(${angle - adjust}deg)`;
        angle += stepAngle
    })


}

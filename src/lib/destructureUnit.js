export default function destructureUnit(unitString){
    const value = Number(unitString.match(/^[-]?\d+/g));
    const unit  = (unitString.match(/[a-z]+/g)||[])[0];
    return { value, unit }
}
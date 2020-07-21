import defaultStyle from './default.js'


export const baseStyle = {
    width:'fit-content',
    height:'fit-content',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'100%',
    backgroundColor: 'transparent',
    objectPosition: 'center',
}

export const textStyle = {
    fontSize:'inherit',
    whiteSpace:'nowrap',
    color:'inherit',
}

export function getSkin(skin,color,backgroundColor){
    if(color === '') color = 'rgb(125,125,125)'
    switch(skin){
        case'default': return defaultStyle(color);
    }
}


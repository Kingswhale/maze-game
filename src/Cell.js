import React from 'react';
import afeez from './afeez.png';
import flower from './flower.jpg';

const style = ({ size, cell }) => {
    const dim = size + 'px';
    let style = {
        width: dim,
        height: dim,
        backgroundSize: 'contain',
        border: '1px solid black',
        transition: 'all 0.1s ease'
    };
    if(cell.value === 'fruit'){
        style.backgroundImage = `url(${flower})`;
    } 
    if(cell.value === 'player') {
        style.backgroundImage = `url(${afeez})`;        
    }

    return style;
};

export default (props) => <td style={style(props)}/>
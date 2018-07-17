import React from 'react';
import stylesWrapper from './../HOC/stylesWrapper';

const ButtonOne = (props) => {
    // let _styles = {...styles.default};
    // if (props.disable){
    //     _styles = {...styles, ...styles.disable};
    //     console.log(_styles);
    // }
    return (
        <button style={props.styles}>I am ButtonOne</button>
    )
}

export default stylesWrapper(ButtonOne);
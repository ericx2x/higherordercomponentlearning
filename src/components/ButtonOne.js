import React, { Component } from 'react';


const ButtonOne = (props) => {
    let _styles = {...styles.default};
    if (props.disable){
        _styles = {...styles, ...styles.disable};
        console.log(_styles);
    }
    return (
        <button style={_styles}>I am ButtonOne</button>
    )
}

export default ButtonOne;
import React, { Component } from 'react';

const styles ={
    default : {
        backgroundColor: '#737373',
        color: '#eae8e8',
        padding: '10px'
    }, disable : {
        backgroundColor: '#9c9c9c',
        color: '#c7c6c6',
    }
}

const ButtonOne = (props) => {
    const _styles = {...styles.default}
    console.log(_styles);
    if (props.disable){

    }
    return (
        <button style={styles.default}>I am ButtonOne</button>
    )
}

export default ButtonOne;
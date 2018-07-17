// import React from 'react';
import commonStyles from './../styles/commonStyles';

const translateProps = (props) => {
    console.log(props);
    let _styles = {...commonStyles.default};
    if(props.disable){
        _styles = {..._styles, ...commonStyles.disable};
    }
    const newProps = {...props, styles:_styles}
    return newProps;
    
}


export default (WrappedComponent) => {
    return function wrapperRender(args){
        return WrappedComponent(translateProps(args));
    }
}
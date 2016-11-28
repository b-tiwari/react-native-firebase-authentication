import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
    var {buttonStyle, buttonTextStyle } = styles;
    return (
        <TouchableOpacity onPress={props.onPress} style={buttonStyle} >
            <Text style={buttonTextStyle}>
                {props.buttonText}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle:{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: '#fff'
    },

    buttonTextStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center',
        color: '#007aff'
    }
};

export { Button } ; //ES6 shorthand for { Button: Button } is { Button }


import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const {viewStyle, textStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        padding: 15,
        backgroundColor: '#88F8F8',
        shadowColor: '#000',
        shadowOffset: { width:0, height: 0 },
        shadowOpacity:0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export { Header };  //ES6 shorthand for { Header: Header } is { Header }
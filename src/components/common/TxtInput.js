import React from 'react';
import {TextInput, View, Text } from 'react-native';

const TxtInput = (props) => {

    return (
        <View style={ styles.viewStyle } >
            <Text  style={ styles.labelStyle }>{ props.label } </Text>
            <TextInput
                autoCorrect={false}
                style={ styles.textInputStyle }
                onChangeText = { props.onChangeText }
                value = { props.value }
                placeholder = {props.placeholder}
                secureTextEntry = {props.secureTextEntry}
            />
        </View>
    );
}

const styles = {
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40
    },
    textInputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight: 23,
        fontSize: 18,
        flex: 2,
        alignSelf: 'stretch'
    },
    labelStyle: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 15
    }
};
export { TxtInput };
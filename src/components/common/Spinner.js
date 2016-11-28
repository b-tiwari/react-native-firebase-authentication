import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
    return (
        <View style={ styles.spinnerStyle }>
            <ActivityIndicator size={ props.size } />
        </View>
    );
};

const styles={
    spinnerStyle : {
        flex: 1,
        justifyContent: 'center',
        alingItems: 'center'
    }
};

export { Spinner };
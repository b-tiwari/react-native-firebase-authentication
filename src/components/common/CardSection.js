import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        
        <View style={styles.cardSection}>
            {props.children}
        </View>
    );
};

const styles = {
    cardSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection } ; //ES6 shorthand for { CardSection: CardSection } is { CardSection }
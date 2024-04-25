import * as React from 'react';
import { View, StyleSheet } from 'react-native';


const Container: React.FC<React.PropsWithChildren> = (props) => (
    <View style={styles.container}>
        {props.children}
    </View>
);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cccc',
        flex: 1
    }
})


export default Container;



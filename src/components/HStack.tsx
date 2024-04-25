import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native'

const HStack: React.FC<React.PropsWithChildren & { style?: ViewStyle }> = (props) => (
    <View style={[styles.container, props.style]}>
        {props.children}
    </View>
);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default HStack;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/themes/color'

const Title = ({ title }: { title: string }) => {
    return (
        <View style={{ borderBottomWidth: 1, borderColor: colors.grey500, marginBottom: 16 }}>
            <Text style={{ fontWeight: '500' }}>{title}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
})
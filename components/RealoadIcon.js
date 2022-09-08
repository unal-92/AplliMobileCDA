import React from 'react'
import  { View, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/index'

export default function RealoadIcon({ load }) {
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'
    return (
            <Ionicons onPress={load} name={reloadIconName} size={24} color={colors.PRIMARY_COLOR} />
    )
}

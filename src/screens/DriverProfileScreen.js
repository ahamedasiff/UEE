import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView, Text, View } from 'react-native'

export default function DriverProfileScreen() {
  return (
    <SafeAreaView >
        <View style={styles.container}>
            <Text>Sriver Profile</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    }
})
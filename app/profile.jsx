import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <Link href="/">Home</Link>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,

        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

// Themed Components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedLink from '../components/ThemedLink'
import Spacer from '../components/Spacer'

const Home = () => {
  return (
    <ThemedView style={styles.container}>

        <ThemedText style={styles.title} textPrimary={true}>Test1</ThemedText>
        <Spacer />
        <ThemedText style={{ marginTop: 10, marginBottom: 30}}>Home</ThemedText>

        <View style={styles.card}>
            <ThemedText>This is a card</ThemedText>
        </View>

        <ThemedLink href="/login">Login</ThemedLink>
        <ThemedLink href="/register">Register</ThemedLink>
        <ThemedLink href="/profile">Profile</ThemedLink>
    </ThemedView>
  )
}

export default Home

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
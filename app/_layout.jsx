import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from "../constants/Colors"
import { UserProvider } from '../contexts/UserContext'

const RootLayout = () => {
  
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.dark

  return (
    <UserProvider>
      <StatusBar value="auto"/>
      <Stack screenOptions={{
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: '#333'
      }}>
          <Stack.Screen name='(auth)' options={{ headerShown: false }}/>
          <Stack.Screen name='(dashboard)' options={{ headerShown: false }}/>
          <Stack.Screen name='index' options={{ title: 'Home' }}/>

      </Stack>
    </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Colors } from "../../constants/Colors"
import useUser from "../../hooks/useUser"

// Themed Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedLink from '../../components/ThemedLink'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useUser();
  
  const handleSubmit = () => {
    console.log('current user:', user)
    console.log('Login button pressed', email, password)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>

        <Spacer />
        <ThemedText textPrimary={true} style={styles.title}>
          Welcome, please login to continue!
        </ThemedText>

        <ThemedTextInput
          style={{ width: '80%', marginBottom: 20 }}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput
          style={{ width: '80%', marginBottom: 20 }}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <ThemedButton onPress={handleSubmit}>
          <ThemedText textPrimary={true}>Login</ThemedText>
        </ThemedButton>

        <Spacer height={100}/>
        <ThemedLink href={'/register'} style={{ textAlign: 'center'}}>
          Register
        </ThemedLink>

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 30,
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
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'

// Themed Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedLink from '../../components/ThemedLink'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import Spacer from '../../components/Spacer'
import useUser from '../../hooks/useUser'

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, register } = useUser();

  const handleSubmit = async () => {
    console.log('Register button pressed', email, password)

    try{
      await register(email, password);
      console.log('current user is:', user)
    } catch(error) {
      console.log(error.message)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>

        <Spacer />
        <ThemedText textPrimary={true} style={styles.title}>
          Register for an account
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
          <ThemedText textPrimary={true}>Register</ThemedText>
        </ThemedButton>

        <Spacer height={100}/>
        <ThemedLink href={'/login'} style={{ textAlign: 'center'}}>
          Login
        </ThemedLink>

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

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
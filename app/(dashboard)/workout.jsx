import { StyleSheet } from 'react-native'

// Themed Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedLink from '../../components/ThemedLink'

const Workout = () => {

  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText style={styles.title} textPrimary={true}>Workout</ThemedText>

      <ThemedLink href="/">Home</ThemedLink>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 30
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

export default Workout;
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors"

const ThemedButton = ({ style, ...props }) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.dark

    return(
        <Pressable
            style={({ pressed }) => [{ backgroundColor: theme.primary }, styles.btn, pressed && styles.pressed]}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    btn: {
      padding: 15,
      borderRadius: 5
    },
    pressed: {
      opacity: 0.8,
    }
})

export default ThemedButton;
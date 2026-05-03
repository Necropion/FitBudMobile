import { Text, useColorScheme } from 'react-native'
import { Colors } from "../constants/Colors"

const ThemedText = ({ style, textPrimary = false, ...props }) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.dark

    const textColor = textPrimary ? theme.textPrimary : theme.textSecondary

  return (
    <Text
        style={[{ color: textColor }, style]}
        {...props}
    />
  )
}

export default ThemedText
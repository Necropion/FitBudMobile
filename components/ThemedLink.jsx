import { useColorScheme } from 'react-native'
import { Colors } from "../constants/Colors"
import { Link } from 'expo-router'

const ThemedLink = ({ style, href, ...props }) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.dark

  return (
    <Link
        style={[{ color: theme.link }, style]}
        href={href}
        {...props}
    />
  )
}

export default ThemedLink
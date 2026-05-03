import { TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors';

const ThemedTextInput = ({ style, ...props }) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.dark

    return (

        <TextInput
            style={[
                {
                    backgroundColor: theme.muted,
                    color: theme.textPrimary,
                    padding: 20,
                    borderRadius: 6
                },
                style
            ]}
            {...props}
        />
    )
}

export default ThemedTextInput
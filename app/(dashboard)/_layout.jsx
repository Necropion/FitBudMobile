import { StatusBar, useColorScheme } from 'react-native'
import { Colors } from "../../constants/Colors"
import { Tabs } from 'expo-router'
import { Ionicons} from '@expo/vector-icons'

const DashboardLayout = () => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.dark

    return (
        <Tabs 
            screenOptions={{ headerShown: false, tabBarStyle: {
                backgroundColor: theme.surface,
                paddingTop: 10,
                height: 90
                },
                tabBarActiveTintColor: theme.primary
            }}
        >
            <Tabs.Screen
                name="profile"
                options={{ title: 'Profile', tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        size={24}
                        name={focused ? 'person' : 'person-outline'}
                        color={focused ? theme.primary : theme.textPrimary}
                    />
                )}}
            />
            <Tabs.Screen
                name="workout"
                options={{ title: 'Workout', tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        size={24}
                        name={focused ? 'barbell' : 'barbell-outline'}
                        color={focused ? theme.primary : theme.textPrimary}
                    />
                )}}
            />
            <Tabs.Screen
                name="settings"
                options={{ title: 'Settings', tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        size={24}
                        name={focused ? 'settings' : 'settings-outline'}
                        color={focused ? theme.primary : theme.textPrimary}
                    />
                )}}
            />
        </Tabs>
    )
}

export default DashboardLayout
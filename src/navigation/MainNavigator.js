// src/navigation/MainNavigator.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import LoginScreen from "../screens/LoginScreen"
import HomeScreen from "../screens/HomeScreen"
import SettingsScreen from "../screens/SettingsScreen"
import { Camera, FileText, Settings as SettingsIcon } from "lucide-react-native"

const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Escanear"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Camera
              style={{ color: "#999" }}
              width={24}
              height={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Historial"
        component={LoginScreen}
        options={{
          tabBarIcon: () => (
            <FileText
              style={{ color: "#999" }}
              width={24}
              height={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <SettingsIcon
              style={{ color: "#999" }}
              width={24}
              height={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
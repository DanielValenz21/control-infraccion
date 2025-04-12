// src/screens/HomeScreen.js
import { View, Text, TouchableOpacity } from "react-native"
import { Camera } from "lucide-react-native"
import { HomeScreenTheme as t } from "../theme/HomeScreenTheme"

export default function HomeScreen() {
  return (
    <View className={t.container}>
      <Text className={t.title}>Pantalla de Escaneo</Text>
      <TouchableOpacity className={t.button}>
        <Camera stroke="#fff" size={24} />
        <Text className={t.buttonText}>Escanear Documento</Text>
      </TouchableOpacity>
    </View>
  )
}
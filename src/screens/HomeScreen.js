import { View, Text, TouchableOpacity } from "react-native"
import { Camera } from "lucide-react-native"
import { HomeScreenTheme as t } from "../theme/HomeScreenTheme"
import { useTailwind } from "nativewind"  // si usas nativewind

export default function HomeScreen() {
  const { tw } = useTailwind()

  return (
    <View style={tw(t.container)}>
      <Text style={tw(t.title)}>Pantalla de Escaneo</Text>
      <TouchableOpacity style={tw(t.button)}>
        <Camera stroke="#fff" size={24} />
        <Text style={tw(t.buttonText)}>Escanear Documento</Text>
      </TouchableOpacity>
    </View>
  )
}
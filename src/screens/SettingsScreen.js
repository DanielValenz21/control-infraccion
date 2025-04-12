// src/screens/SettingsScreen.js
import { useState } from "react"
import { View, Text, Switch, StyleSheet } from "react-native"
import { Settings as SettingsIcon } from "lucide-react-native"

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // Aquí agregarías la lógica para cambiar el tema global, si usás Redux o Context
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SettingsIcon color="#0c7c59" size={28} />
        <Text style={styles.headerText}>Configuración</Text>
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.optionLabel}>Modo Oscuro:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#0c7c59" }}
          thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>

      {/* Agrega más opciones de configuración según tu proyecto */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#0c7c59",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
})
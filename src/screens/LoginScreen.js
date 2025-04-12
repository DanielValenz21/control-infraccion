// src/screens/LoginScreen.js
import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"
import { login } from "../redux/slices/authSlice"
import { LoginScreenTheme as t } from "../theme/LoginScreenTheme"

export default function LoginScreen() {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    // Lógica de validación...
    dispatch(login({ username }))
  }

  return (
    <View className={t.container}>
      <Text className={t.title}>Tránsito Municipal</Text>

      <View>
        <Text className={t.label}>Usuario</Text>
        <TextInput
          className={t.input}
          placeholder="Escribe tu usuario"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View>
        <Text className={t.label}>Contraseña</Text>
        <TextInput
          className={t.input}
          secureTextEntry
          placeholder="Escribe tu contraseña"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity onPress={handleLogin} className={t.button}>
        <Text className={t.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  )
}
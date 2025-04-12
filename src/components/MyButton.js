// src/components/MyButton.js
import { Text, TouchableOpacity } from "react-native"

export default function MyButton({ label, onPress, style = "", textStyle = "" }) {
  return (
    <TouchableOpacity onPress={onPress} className={`bg-blue-600 p-4 rounded-md ${style}`}>
      <Text className={`text-white text-center font-bold ${textStyle}`}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
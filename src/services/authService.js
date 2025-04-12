// src/services/authService.js
import axios from "axios"

const API_URL = "https://tu-dominio.com" // sin /api si no lo usas

export async function loginUser(credentials) {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials)
    return response.data
  } catch (error) {
    throw error
  }
}
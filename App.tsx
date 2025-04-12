// App.tsx
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import { store } from "./src/redux/store"
import MainNavigator from "./src/navigation/MainNavigator"
import { StatusBar } from "expo-status-bar"

// 1. Importamos TailwindProvider
import { TailwindProvider } from "nativewind"

export default function App() {
  return (
    // 2. Agregamos <TailwindProvider> como wrapper
    <TailwindProvider>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <MainNavigator />
        </NavigationContainer>
      </Provider>
    </TailwindProvider>
  )
}
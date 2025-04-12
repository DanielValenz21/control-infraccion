// App.tsx
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import { store } from "./src/redux/store"
import MainNavigator from "./src/navigation/MainNavigator"
import { StatusBar } from "expo-status-bar"

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  )
}
// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

// Exporta este tipo para usar en useSelector
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
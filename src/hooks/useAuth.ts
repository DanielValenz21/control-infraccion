// src/hooks/useAuth.js
import { useSelector } from "react-redux"
import { useMemo } from "react"
import { RootState } from "../redux/store"

export default function useAuth() {
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth)

  return useMemo(() => ({
    isLoggedIn,
    user,
  }), [isLoggedIn, user])
}
"use client"

import { useSyncExternalStore } from "react"

// Fake one-click auth: logged-in state is a flag in localStorage.
const KEY = "cryptowire:loggedIn"

// The storage event only fires in other tabs, so same-tab changes notify these directly.
const listeners = new Set<() => void>()

const notify = () => listeners.forEach((listener) => listener())

const subscribe = (listener: () => void) => {
  listeners.add(listener)
  window.addEventListener("storage", listener)
  return () => {
    listeners.delete(listener)
    window.removeEventListener("storage", listener)
  }
}

const getSnapshot = () => localStorage.getItem(KEY) === "true"

// The server can't see localStorage, so it always renders the anonymous state.
const getServerSnapshot = () => false

export const useLoggedIn = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

export const login = () => {
  localStorage.setItem(KEY, "true")
  notify()
}

export const logout = () => {
  localStorage.removeItem(KEY)
  notify()
}

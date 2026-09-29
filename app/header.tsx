"use client"

import Link from "next/link"
import { login, logout, useLoggedIn } from "@/lib/auth"

export default function Header() {
  const loggedIn = useLoggedIn()

  return (
    <header className="flex items-center justify-between border-b p-4">
      <Link href="/" className="text-3xl font-bold">
        CryptoWire
      </Link>
      <nav className="flex gap-2">
        {loggedIn ? (
          <button type="button" className="border px-3 py-1" onClick={logout}>
            Logout
          </button>
        ) : (
          <>
            <button type="button" className="border px-3 py-1" onClick={login}>
              Register
            </button>
            <button type="button" className="border px-3 py-1" onClick={login}>
              Login
            </button>
          </>
        )}
      </nav>
    </header>
  )
}

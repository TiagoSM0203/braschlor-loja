import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (params: {
    email: string
    password: string
    fullName: string
  }) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem('auth:user:v1')
      return raw ? (JSON.parse(raw) as User) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('auth:user:v1', JSON.stringify(user))
    } else {
      localStorage.removeItem('auth:user:v1')
    }
  }, [user])

  const login: AuthContextType['login'] = async (email) => {
    // Frontend-only: autenticação local fictícia
    const name = email.split('@')[0] || 'Cliente'
    const id = `local-${Date.now()}`
    setUser({ id, name, email })
  }

  const register: AuthContextType['register'] = async ({ email, fullName }) => {
    // Frontend-only: registro local fictício
    const id = `local-${Date.now()}`
    setUser({ id, name: fullName || email.split('@')[0], email })
  }
  const logout = () => {
    setUser(null)
  }

  const value = useMemo(
    () => ({ user, isAuthenticated: !!user, login, register, logout }),
    [login, register, user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

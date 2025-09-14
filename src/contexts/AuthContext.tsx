import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { supabase } from '../lib/supabase'

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
  const [user, setUser] = useState<User | null>(null)

  async function fetchProfile(userId: string) {
    const { data } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', userId)
      .maybeSingle()
    return data?.full_name as string | undefined
  }

  async function ensureProfile(userId: string, fullName?: string) {
    if (!fullName) return
    await supabase.from('profiles').upsert({ id: userId, full_name: fullName })
  }

  useEffect(() => {
    // Carrega sessão atual
    supabase.auth.getSession().then(async ({ data }) => {
      const s = data.session
      if (s?.user) {
        const fullName = await fetchProfile(s.user.id).catch(() => undefined)
        setUser({
          id: s.user.id,
          name:
            fullName ||
            (s.user.user_metadata as { full_name?: string })?.full_name ||
            s.user.email?.split('@')[0] ||
            'Cliente',
          email: s.user.email || '',
        })
      } else {
        setUser(null)
      }
    })
    // Observa mudanças de auth
    const { data: sub } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          const fullName = await fetchProfile(session.user.id).catch(
            () => undefined
          )
          setUser({
            id: session.user.id,
            name:
              fullName ||
              (session.user.user_metadata as { full_name?: string })
                ?.full_name ||
              session.user.email?.split('@')[0] ||
              'Cliente',
            email: session.user.email || '',
          })
        } else {
          setUser(null)
        }
      }
    )
    return () => {
      sub.subscription.unsubscribe()
    }
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const login: AuthContextType['login'] = async (email, password) => {
    let captchaToken: string | undefined
    try {
      const siteKey = process.env.REACT_APP_HCAPTCHA_SITEKEY
      const anyWin = window as any
      if (siteKey && anyWin.hcaptcha?.execute) {
        captchaToken = await anyWin.hcaptcha.execute(siteKey, { async: true })
      }
    } catch (e) {
      // opcional: log leve em dev
      // console.warn('hCaptcha execute falhou', e)
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: captchaToken ? { captchaToken } : undefined,
    })
    if (error) throw error
    const u = data.user
    if (!u) return
    const fullName = await fetchProfile(u.id).catch(() => undefined)
    setUser({
      id: u.id,
      name:
        fullName ||
        (u.user_metadata as { full_name?: string })?.full_name ||
        u.email?.split('@')[0] ||
        'Cliente',
      email: u.email || '',
    })
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const register: AuthContextType['register'] = async ({
    email,
    password,
    fullName,
  }) => {
    const redirectTo = `${window.location.origin}/perfil`
    let captchaToken: string | undefined
    try {
      const siteKey = process.env.REACT_APP_HCAPTCHA_SITEKEY
      const anyWin = window as any
      if (siteKey && anyWin.hcaptcha?.execute) {
        captchaToken = await anyWin.hcaptcha.execute(siteKey, { async: true })
      }
    } catch (e) {
      // opcional: log leve em dev
      // console.warn('hCaptcha execute falhou', e)
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectTo,
        data: { full_name: fullName },
        ...(captchaToken ? { captchaToken } : {}),
      },
    })
    if (error) throw error
    const u = data.user
    if (u) await ensureProfile(u.id, fullName)
    if (data.session?.user) {
      setUser({
        id: data.session.user.id,
        name: fullName || email.split('@')[0],
        email,
      })
    }
  }
  const logout = () => {
    supabase.auth.signOut()
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

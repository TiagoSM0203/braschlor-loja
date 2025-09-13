import React, { createContext, useContext, useMemo, useState } from 'react'

export type ToastType = 'success' | 'info' | 'error'

export type Toast = {
  id: number
  message: string
  type: ToastType
  timeout: number
}

type ToastContextType = {
  toasts: Toast[]
  notify: (
    message: string,
    options?: { type?: ToastType; timeout?: number }
  ) => void
  dismiss: (id: number) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const notify: ToastContextType['notify'] = (
    message,
    { type = 'success', timeout = 2500 } = {}
  ) => {
    const id = Date.now() + Math.floor(Math.random() * 1000)
    const toast: Toast = { id, message, type, timeout }
    setToasts((prev) => [...prev, toast])
    window.setTimeout(() => dismiss(id), timeout)
  }

  const dismiss = (id: number) =>
    setToasts((prev) => prev.filter((t) => t.id !== id))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => ({ toasts, notify, dismiss }), [toasts])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}

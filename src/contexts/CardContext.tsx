import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type CartItem = {
  id: number
  title: string
  price: number
  img: string
  qty: number
}

type CartContextType = {
  items: CartItem[]
  count: number
  total: number
  addItem: (item: Omit<CartItem, 'qty'>, qty?: number) => void
  updateQty: (id: number, qty: number) => void
  removeItem: (id: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem('cart:v1')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cart:v1', JSON.stringify(items))
  }, [items])

  const addItem: CartContextType['addItem'] = (item, qty = 1) => {
    setItems((prev) => {
      const ix = prev.findIndex((p) => p.id === item.id)
      if (ix >= 0) {
        const next = [...prev]
        next[ix] = { ...next[ix], qty: next[ix].qty + qty }
        return next
      }
      return [...prev, { ...item, qty }]
    })
  }

  const updateQty = (id: number, qty: number) => {
    setItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p))
        .filter((p) => p.qty > 0)
    )
  }

  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((p) => p.id !== id))

  const clear = () => setItems([])

  const count = useMemo(() => items.reduce((acc, i) => acc + i.qty, 0), [items])
  const total = useMemo(
    () => items.reduce((acc, i) => acc + i.qty * i.price, 0),
    [items]
  )

  const value = { items, count, total, addItem, updateQty, removeItem, clear }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

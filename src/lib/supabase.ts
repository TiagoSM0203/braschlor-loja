import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = (process.env.REACT_APP_SUPABASE_URL || '').trim()
const SUPABASE_ANON_KEY = (process.env.REACT_APP_SUPABASE_ANON_KEY || '').trim()

function maskKey(k: string) {
  if (!k) return 'EMPTY'
  const start = k.slice(0, 6)
  const end = k.slice(-4)
  return `${start}...${end}`
}

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  // Para CRA, use REACT_APP_SUPABASE_URL e REACT_APP_SUPABASE_ANON_KEY em .env.local
  // eslint-disable-next-line no-console
  console.error(
    '[Supabase] Variáveis ausentes. URL=',
    SUPABASE_URL || 'EMPTY',
    ' KEY=',
    maskKey(SUPABASE_ANON_KEY)
  )
  throw new Error(
    'Supabase: defina REACT_APP_SUPABASE_URL e REACT_APP_SUPABASE_ANON_KEY em .env.local (reinicie o dev server)'
  )
}

// Log leve em dev para depurar cabeçalho apikey ausente
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-console
  console.info(
    '[Supabase] URL=',
    SUPABASE_URL,
    ' KEY=',
    maskKey(SUPABASE_ANON_KEY)
  )
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

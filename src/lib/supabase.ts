import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY as string

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  // Ajude durante desenvolvimento: loga um aviso claro
  // Para CRA, use REACT_APP_SUPABASE_URL e REACT_APP_SUPABASE_ANON_KEY em .env.local
  // Valores VITE_* não são lidos pelo react-scripts.
  // eslint-disable-next-line no-console
  console.warn(
    'Supabase envs ausentes. Defina REACT_APP_SUPABASE_URL e REACT_APP_SUPABASE_ANON_KEY em .env.local'
  )
}

export const supabase = createClient(
  SUPABASE_URL || '',
  SUPABASE_ANON_KEY || ''
)

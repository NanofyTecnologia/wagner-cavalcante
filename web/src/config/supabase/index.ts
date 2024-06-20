import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_CLIENT_KEY || ''

const supabase = createClient(
  'https://gtreqzctrqppqncegkpw.supabase.co',
  SUPABASE_KEY,
)

export default supabase

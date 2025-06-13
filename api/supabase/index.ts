import { createClient } from '@supabase/supabase-js'

type Database = {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: number
          created_at: string
          name: string
          phone_number: string
        }
        Insert: {
          name: string
          phone_number: string
        }
        Update: {
          name?: string
          phone_number?: string
        }
      }
    }
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
console.log('supabaseUrl ->', supabaseUrl)
console.log('supabaseAnonKey ->', supabaseAnonKey)
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

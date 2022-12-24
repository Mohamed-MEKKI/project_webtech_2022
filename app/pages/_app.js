import '../styles/globals.css'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { UserContextProvider} from '../components/UserContext'
import { ThemeContextProvider } from '../components/ThemeContext'

export default function MyApp({ Component, pageProps }) {
  // const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <ThemeContextProvider>
      <SessionContextProvider
        // supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </SessionContextProvider>
    </ThemeContextProvider>
  )
}

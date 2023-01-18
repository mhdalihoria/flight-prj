import '@/styles/globals.css'
import { ContextProvider } from '@/Context'

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

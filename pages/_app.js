import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
    </>
  )
}

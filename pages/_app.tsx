import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss'
import 'highlight.js/styles/magula.css';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

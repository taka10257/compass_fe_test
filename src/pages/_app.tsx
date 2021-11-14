import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

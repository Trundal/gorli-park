import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from './header'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <div >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
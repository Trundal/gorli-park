import { imageBuilder } from "../../lib/sanity";

import Footer from '..//footer'
import Meta from '../meta'
import Header from '../header'

import styles from './Layout.module.css';


export default function Layout({ preview, children, bgGraphic }) {

  const backgroundStyles = {
    background: `url(${imageBuilder(bgGraphic).url()})`,
    backgroundAttachment: 'fixed',
    backgroundColor: '#58585B',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
    backgroundSize: 'cover',
  }

  console.log(backgroundStyles);

  return (
    <>
      <Meta />
      <div className={styles.background} style={ backgroundStyles }>
      <Header />
      <div >
        <main>{children}</main>
      </div>
      <Footer />
      </div>
    </>
  )
}

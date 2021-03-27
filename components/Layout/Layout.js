import { imageBuilder } from '../../lib/sanity';

import Footer from '../Footer/Footer';
import Meta from '../meta';
import Header from '../header';

import styles from './Layout.module.css';

export default function Layout({ children, bgGraphic }) {
  let backgroundStyles = {
    backgroundColor: '#58585B',
  };
  if (bgGraphic) {
    backgroundStyles = {
      background: `url(${imageBuilder(bgGraphic).url()})`,
      backgroundAttachment: 'fixed',
      backgroundColor: '#58585B',
      backgroundPositionX: 'center',
      backgroundPositionY: 'center',
      backgroundSize: 'cover',
    };
  }

  return (
    <>
      <Meta />
      <div className={styles.background} style={backgroundStyles}>
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}

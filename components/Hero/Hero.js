import { useState } from 'react';
import Image from 'next/image';
import { imageBuilder } from '../../lib/sanity';
import Contact from '../Contact/Contact';
import Modal from '../Modal/Modal';
import styles from './Hero.module.css';

export default function HeroPost({ title, coverImage, body }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.img}>
        <Image
          alt={`imager representing the thitle of ${title}`}
          // srcSet={
          //   (`${imageBuilder(coverImage).width(910).height(910).url()} 1920px`,
          //   `${imageBuilder(coverImage).width(800).height(800).url()} 1600px`,
          //   `${imageBuilder(coverImage).width(683).height(683).url()} 1366px`,
          //   `${imageBuilder(coverImage).width(512).height(512).url()} 1024px`,
          //   `${imageBuilder(coverImage).width(384).height(384).url()} 768px`,
          //   `${imageBuilder(coverImage).width(320).height(320).url()} 640px`)
          // }
          src={imageBuilder(coverImage).width(500).height(500).url()}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.text}>
        <div>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div>
          <p className={styles.body}>{body}</p>
        </div>
        <button className={styles.btn} onClick={() => setModalOpen(!modalOpen)}>
          Contact Us
        </button>
        {modalOpen && (
          <Modal closeModal={() => setModalOpen(false)}>
            <Contact />
          </Modal>
        )}
      </div>
    </section>
  );
}

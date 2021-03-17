import Image from "next/image";
import { imageBuilder } from "../../lib/sanity";
import styles from "./Hero.module.css";

export default function HeroPost({ title, coverImage, body }) {

  return (
    <section className={styles.section}>
      <div className={styles.img}>
        <Image
          alt={`imager representing the thitle of ${title}`}
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
        <button className={styles.btn}>A THING</button>
      </div>
    </section>
  );
}

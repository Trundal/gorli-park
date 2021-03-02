import styled from "./hero.module.css";
import Image from "next/image";
import { imageBuilder } from "../lib/sanity";

export default function HeroPost({ title, coverImage, body }) {
  return (
    <section className={styled.section}>
      <div className={styled.img}>
        <Image
          alt={`imager representing the thitle of ${title}`}
          // https://www.sanity.io/docs/image-url && https://github.com/vercel/next.js/blob/master/errors/next-image-unconfigured-host.md
          src={imageBuilder(coverImage).width(500).height(500).url()}
          width={500}
          height={500}
        />
      </div>
      <div className={styled.text}>
        <div>
          <h3 className={styled.title}>{title}</h3>
        </div>
        <div>
          <p className={styled.body}>{body}</p>
        </div>
        <button className={styled.btn}>A THING</button>
      </div>
    </section>
  );
}

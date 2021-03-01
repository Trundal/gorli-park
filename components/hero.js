import CoverImage from "../components/cover-image";
import styled from "./hero.module.css";
import Image from "next/image";

export default function HeroPost({ title, coverImage, excerpt }) {
  return (
    <section>
      <div className={styled.img}>
        <Image
          slug={slug}
          imageObject={coverImage}
          title={title}
          url={coverImage}
        />
      </div>
      <div>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>{excerpt}</p>
        </div>
      </div>
    </section>
  );
}

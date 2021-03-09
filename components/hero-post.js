import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";
import styled from "./hero-post.module.css";

export default function HeroPost({ post }) {
  const { title, coverImage, date, description, author, slug } = post;
  return (
    <section className={styled.section}>
      <div className={styled.img}>
        {/* not changing this to the next-image before i've figured out if sanity checks for webp  */}
        <CoverImage
          slug={slug}
          imageObject={coverImage}
          title={title}
          url={coverImage}
        />
      </div>
      <div
        style={{ display: "flex", margin: "4rem", justifyContent: "center" }}
      >
        <div className={styled.text}>
          <h3 className={styled.title}>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className={styled.title}>{title}</a>
            </Link>
          </h3>
          <div className={styled.date}>
            {date ? <Date dateString={date} /> : ""}
          </div>
          {/* this is where the exerpt will go... but that is a block element 
          and cant be passed as props. So there is some long as work around that 
          I don't want to get in to right now  */}
          <p className={styled.description}>{description}</p>
        </div>
        <div style={{ width: "33%" }}>
          <div
            style={{
              borderLeft: ".5rem solid var(--primaryColor)",
            }}
          >
            <Avatar name={author?.name} picture={author?.picture} />
          </div>
        </div>
      </div>
    </section>
  );
}

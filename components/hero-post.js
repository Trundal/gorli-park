import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";
import styled from "./hero-post.module.css";

export default function HeroPost({ post }) {
  const { title, coverImage, date, excerpt, author, slug } = post;
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
      <div>
        <div>
          <h3>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className={styled.title}>{title}</a>
            </Link>
          </h3>
          <div className={styled.date}>
            {date ? <Date dateString={date} /> : ""}
          </div>
        </div>
        <div>
          <p className={styled.excerpt}>{excerpt}</p>
          <Avatar name={author?.name} picture={author?.picture} />
        </div>
      </div>
    </section>
  );
}

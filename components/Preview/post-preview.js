import Avatar from "../components/avatar";
import Date from "../components/date";
import PreviewImage from "./preview-image";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import styled from "./post-preview.module.css";
export default function PostPreview({
  title,
  coverImage,
  date,
  description,
  slug,
}) {
  return (
    <div style={{ width: "50rem", marginBottom: "2rem" }}>
      <div>
        <PreviewImage
          slug={slug}
          title={title}
          imageObject={coverImage}
          url={imageBuilder(coverImage).url()}
        />
      </div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className={styled.title}>{title}</a>
        </Link>
      </h3>
      <div className={styled.date}>
        {date ? <Date dateString={date} /> : ""}
      </div>
      <p className={styled.description}>{description}</p>
    </div>
  );
}

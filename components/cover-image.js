import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";

export default function CoverImage({ title, url, imageObject, slug }) {
  const image = (
    <img
      style={{ borderRadius: "1.5rem" }}
      width={1240}
      height={540}
      alt={`Cover Image for ${title}`}
      className={cn("", {
        "": slug,
      })}
      src={imageBuilder(imageObject).width(1240).height(540).url()}
    />
  );

  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

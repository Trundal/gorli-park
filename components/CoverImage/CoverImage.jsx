import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../../lib/sanity";
import Carousele from "react-alice-carousel";
import styles from "./CoverImage.module.css";

export default function CoverImage({
  title,
  url,
  imageObject,
  slug,
  pageType,
}) {
  const image = (
    <img
      style={{ width: "100%" }}
      alt={`Cover Image for ${title}`}
      className={cn("", {
        "": slug,
      })}
      src={imageBuilder(imageObject).width(1240).height(540).url()}
    />
  );

  return (
    <div className={styles.image}>
      {slug ? (
        <>
          <Link as={`/posts/${slug}`} href={`/posts/[slug]`}>
            <a aria-label={title}>{image} </a>
          </Link>
          <p>{pageType} steve </p>
        </>
      ) : (
        <Carousele>
          {imageObject != []
            ? image
            : imageObject.map((image) => {
                <img
                  style={{ width: "100%" }}
                  alt={`Cover Image for ${title}`}
                  className={cn("", {
                    "": slug,
                  })}
                  src={imageBuilder(image).width(1240).height(540).url()}
                />;
              })}
        </Carousele>
      )}
    </div>
  );
}

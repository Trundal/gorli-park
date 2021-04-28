import cn from 'classnames';
import Link from 'next/link';
import { imageBuilder } from '../../lib/sanity';
import Carousele from 'react-alice-carousel';
import styles from './CoverImage.module.css';

export default function CoverImage({ title, imageObject, slug, pageType }) {
  const image = (
    <img
      style={{
        width: '100%',
        // backgroundImage: `url(${imageBuilder(imageObject).metadata.lqip})`,
        // paddingTop: `calc(100% / ${imageBuilder(imageObject).metadata.dimensions.aspectRatio})`,
      }}
      alt={`Cover Image for ${title}`}
      className={cn('', {
        '': slug,
      })}
      srcSet={
        (`${imageBuilder(imageObject).width(1920).url()} 1920px`,
        `${imageBuilder(imageObject).width(1600).url()} 1600px`,
        `${imageBuilder(imageObject).width(1366).url()} 1366px`,
        `${imageBuilder(imageObject).width(1024).url()} 1024px`,
        `${imageBuilder(imageObject).width(768).url()} 768px`,
        `${imageBuilder(imageObject).width(640).url()} 640px`)
      }
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
                  style={{ width: '100%' }}
                  alt={`Cover Image for ${title}`}
                  className={cn('', {
                    '': slug,
                  })}
                  src={imageBuilder(image).width(1240).height(540).url()}
                />;
              })}
        </Carousele>
      )}
    </div>
  );
}

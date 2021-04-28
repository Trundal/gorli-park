import cn from 'classnames';
import Link from 'next/link';
import { imageBuilder } from '../lib/sanity';

export default function CoverImage({ title, imageObject, slug }) {
  const image = (
    <img
      style={{ width: '100%' }}
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

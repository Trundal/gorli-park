import cn from 'classnames';
import Link from 'next/link';
import { imageBuilder } from '../lib/sanity';

export default function CoverImage({ title, imageObject, slug, pageType }) {
  const image = (
    <img
      style={{ borderRadius: '1.5rem' }}
      width={500}
      height={300}
      alt={`Cover Image for ${title}`}
      className={cn('', {
        '': slug,
      })}
      srcSet={
        (`${imageBuilder(imageObject).width(960).url()} 1920px`,
        `${imageBuilder(imageObject).width(800).url()} 1600px`,
        `${imageBuilder(imageObject).width(683).url()} 1366px`,
        `${imageBuilder(imageObject).width(512).url()} 1024px`,
        `${imageBuilder(imageObject).width(300).url()} 768px`,
        `${imageBuilder(imageObject).width(200).url()} 640px`)
      }
      src={imageBuilder(imageObject).width(500).height(300).url()}
    />
  );

  return (
    <div>
      {slug ? (
        <Link as={`/${pageType}/${slug}`} href={`/${pageType}/[slug]`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

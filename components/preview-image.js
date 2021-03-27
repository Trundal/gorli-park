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

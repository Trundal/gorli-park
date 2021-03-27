import Date from '../date';
import PreviewImage from '../preview-image';
import Link from 'next/link';
import { imageBuilder } from '../../lib/sanity';
import styled from './Preview.module.css';

export default function Preview({ title, coverImage, date, description, slug, pageType }) {
  return (
    <div className={styled.block}>
      <div className={styled.image}>
        <PreviewImage
          slug={slug}
          title={title}
          pageType={pageType}
          imageObject={coverImage}
          url={imageBuilder(coverImage).url()}
        />
      </div>
      <h3>
        <Link as={`/${pageType.toLowerCase()}/${slug}`} href={`/${pageType.toLowerCase()}/[slug]`}>
          <a className={styled.title}>
            {title}
            {pageType}
          </a>
        </Link>
      </h3>
      <div className={styled.date}>{date ? <Date dateString={date} /> : ''}</div>
      <p className={styled.description}>{description}</p>
    </div>
  );
}

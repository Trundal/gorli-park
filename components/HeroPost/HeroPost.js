import Avatar from '../avatar';
import Date from '../date';
import CoverImage from '../cover-image';
import Link from 'next/link';
import styled from './HeroPost.module.css';

export default function HeroPost({ post }) {
  const { title, coverImage, date, description, author, slug } = post;
  return (
    <section className={styled.section}>
      <div className={styled.img}>
        {/* not changing this to the next-image before i've figured out if sanity checks for webp  */}
        <CoverImage slug={slug} imageObject={coverImage} title={title} url={coverImage} />
      </div>
      <div className={styled.textBlock}>
        <div className={styled.text}>
          <h3 className={styled.title}>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className={styled.title}>{title}</a>
            </Link>
          </h3>
          <div className={styled.date}>{date ? <Date dateString={date} /> : ''}</div>
          <p className={styled.description}>{description}</p>
        </div>
        <div className={styled.avatar}>
          <div className={styled.border}>
            <Avatar name={author?.name} picture={author?.picture} />
          </div>
        </div>
      </div>
    </section>
  );
}

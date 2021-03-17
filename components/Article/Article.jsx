import Title from '../Title/Title';
import Body from '../Body/Body';
import Author from '../Author/Author';
import CoverImage from '../CoverImage/CoverImage'

import styles from './Article.module.css';

const Article = ({ title, body, author, date, coverImage }) => (
  <div className={styles.section}>
    <div className={styles.articleWrapper}>
      <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      <div className={styles.bodyWrapper}>
        <Title title={title} date={date} name={author.name} />
        <Body content={body} />
        <Author name={author.name} picture={author.picture} bio={author.bio} />
      </div>
    </div>
  </div>

);

export default Article;

import { imageBuilder } from "../../lib/sanity";
import styles from './Author.module.css';
import markdownStyles from '../markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'

const Author = ({ name, picture, bio }) => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src={imageBuilder(picture).width(100).height(100).url()}
        alt={name}
      />
      <div className={styles.textWrapper}>
        <div className={styles.name}>{name}</div>
        <div className={styles.bio}>
          <BlockContent blocks={bio} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} className={markdownStyles.markdown} />
        </div>
      </div>
    </div>
  );
}

export default Author

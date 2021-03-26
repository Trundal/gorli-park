import { imageBuilder } from '../../lib/sanity';
import styles from './Bio.module.css';
import markdownStyles from '../markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';

const Bio = ({ name, image, bio, title }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={imageBuilder(image).width(250).height(250).url()} alt={name} />
      <div className={styles.textWrapper}>
        <div className={styles.name}>{name}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.bio}>
          <BlockContent
            blocks={bio}
            // eslint-disable-next-line no-undef
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            // eslint-disable-next-line no-undef
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            className={markdownStyles.markdown}
          />
        </div>
      </div>
    </div>
  );
};

export default Bio;

/* eslint-disable no-undef */
import markdownStyles from '../markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';

import styles from './Body.module.css';

export default function PostBody({ content }) {
  return (
    <div className={styles.body}>
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
      />
    </div>
  );
}

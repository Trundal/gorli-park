import Title from '../Title/Title';
import Body from '../Body/Body';
import Author from '../Author/Author';

import styles from './Article.module.css'

const Article = ({title, body, author, date}) => {
    console.log(author);
    return (
<div className={styles.wrapper}>
    <Title title={title} date={date} name={author.name} />
    <Body content={body} />
    <Author name={author.name} picture={author.picture} bio={author.bio}/>
</div>
    )
}



export default Article;
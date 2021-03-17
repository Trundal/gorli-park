import styles from './Title.module.css';

const Title = ({ title, name, date }) =>  {
  const d = new Date(date);
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.nameBlock}>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>{d.toUTCString()}</div>
      </div>
    </>
  )
}



export default Title

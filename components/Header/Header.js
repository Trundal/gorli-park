import Avatar from '../Avatar/Author'
import CoverImage from '../cover-image'
import Title from '../Title/Title'


const Header = ({ title, coverImage, date, author }) => {
  return (
    <>
      <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      <Title>{title}</Title>
      <Avatar name={author?.name} picture={author?.picture} date={date}/>
    </>
  )
}

export default Header;
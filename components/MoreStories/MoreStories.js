import PostPreview from "../Preview/Preview";
import styled from "./MoreStories.module.css";

export default function MoreStories({ posts }) {
  return (
    <section className={styled.wrapper}>
      <div>
        <h2 style={{ fontSize: "3rem", textAlign: "center" }}>More Stories</h2>
      </div>
      <div className={styled.postWrapper}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            description={post.description}
          />
        ))}
      </div>
    </section>
  );
}

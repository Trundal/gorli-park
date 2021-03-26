import PostPreview from "../Preview/Preview";
import styled from "./Stories.module.css";

export default function MoreStories({ posts, title }) {
  return (
    <section className={styled.wrapper}>
      <div>
        <h2 style={{ fontSize: "3rem", textAlign: "center" }}>{title}</h2>
      </div>
      <div className={styled.postWrapper}>
        {posts.map((post) => (
          <>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              description={post.description}
              pageType={title.toLowerCase()}
            />
          </>
        ))}
      </div>
    </section>
  );
}

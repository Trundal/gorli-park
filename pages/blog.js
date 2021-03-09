import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForHome, getLandingPage } from "../lib/api";
import Head from "next/head";

export default function Blog({ allPosts, preview, landingPage }) {
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout preview={preview}>
        <p>Here you'll find all of our blog posts</p>
        <input placeholder="I am a search bar" />
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const landingPage = await getLandingPage();
  return {
    props: { allPosts, preview, landingPage },
    revalidate: 1,
  };
}

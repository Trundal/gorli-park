import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Hero from "../components/hero";
import Layout from "../components/layout";
import { getAllPostsForHome, getLandingPage } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts, preview, landingPage }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const hero = landingPage;
  console.log("🎅🎅🎅🎅🎅" + heroPost);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>GorliPark</title>
        </Head>
        <Container>
          {hero && (
            <Hero
              title={hero.title}
              coverImage={hero.mainImage}
              body={landingPage.body[0].children[0].text}
            />
          )}
        </Container>
        <Container>
          {heroPost && (
            <HeroPost title={heroPost.title} coverImage={heroPost.coverImage} />
          )}
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

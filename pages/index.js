import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Hero from "../components/hero";
import Layout from "../components/layout";
import { getAllPostsForHome, getLandingPage } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts, preview, landingPage }) {
  //heroPost is just latest post, we should have "Featured"
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const hero = landingPage;

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
          {heroPost && <HeroPost post={heroPost} />}
          {morePosts.length > 0 && (
            <div>
              <h2 style={{ fontSize: "3rem", textAlign: "center" }}>
                More Stories
              </h2>
              <MoreStories posts={morePosts} />
            </div>
          )}
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

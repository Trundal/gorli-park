import Container from '../components/container';
import Stories from '../components/Stories/Stories';
import HeroPost from '../components/HeroPost/HeroPost';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import { getAllPostsForHome, getLandingPage, getSite } from '../lib/api';
import Head from 'next/head';

export default function Index({ allPosts, preview, landingPage, site }) {
  // TODO: heroPost is just latest post, we should have "Featured"
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Layout preview={preview} bgGraphic={site ? site.bgGraphic : null}>
      <Head>
        <title>GorliPark</title>
      </Head>
      <Container>
        {landingPage && (
          <Hero
            title={landingPage.title}
            coverImage={landingPage.mainImage}
            body={landingPage.body[0].children[0].text}
          />
        )}
      </Container>
      <Container>
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length > 0 && <Stories posts={morePosts} title={'More Stories'} pageType={'posts'} />}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const landingPage = await getLandingPage();
  const site = await getSite();

  return {
    props: { allPosts, preview, landingPage, site },
    revalidate: 1,
  };
}

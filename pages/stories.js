import Container from '../components/container';
import Stories from '../components/Stories/Stories';
import Layout from '../components/Layout/Layout';
import { getAllPostsForHome, getSite } from '../lib/api';
import Head from 'next/head';

export default function Index({ allPosts, preview, site }) {
  return (
    <Layout preview={preview} bgGraphic={site ? site.bgGraphic : null}>
      <Head>
        <title>GorliPark - Stories</title>
      </Head>
      <Container>
        <Stories posts={allPosts} title={"Our Stories"} pageType={"posts"} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const site = await getSite();

  return {
    props: { allPosts, preview, site },
    revalidate: 1,
  };
}

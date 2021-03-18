import Container from "../components/container";
import Stories from "../components/Stories/Stories";
import Layout from "../components/Layout/Layout";
import { getAllPostsForHome, getLandingPage } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts, preview, landingPage }) {

  return (
    <Layout preview={preview} bgGraphic={landingPage ? landingPage.bgGraphic : null}>
    <Head>
      <title>GorliPark - Stories</title>
    </Head>
    <Container>
        <Stories posts={allPosts} title={'Our Stories'} />
    </Container>
  </Layout>
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
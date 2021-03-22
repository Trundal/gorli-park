import Container from "../components/Container/Container";
import Body from "../components/Body/Body";
import Layout from "../components/Layout/Layout";
import { getSite } from "../lib/api";
import Head from "next/head";

export default function Index({ preview, imprint, bgGraphic }) {

  return (
    <Layout preview={preview} bgGraphic={bgGraphic}>
      <Head>
        <title>GorliPark - Imprint</title>
      </Head>
      <Container>
        <Body content={imprint} />      
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const site = await getSite();

  return {
    props: {
      preview,
      imprint: site?.imprint || null,
      bgGraphic: site?.bgGraphic || null,
    },
    revalidate: 1,
  };
}
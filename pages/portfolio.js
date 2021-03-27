import Container from '../components/container';
import Stories from '../components/Stories/Stories';
import Layout from '../components/Layout/Layout';
import { getAllPortfolioEntries, getSite } from '../lib/api';
import Head from 'next/head';

export default function Index({ allPortfolioEntries, preview, site }) {
  return (
    <Layout preview={preview} bgGraphic={site ? site.bgGraphic : null}>
      <Head>
        <title>GorliPark - Portfolio</title>
      </Head>
      <Container>
        <Stories
          posts={allPortfolioEntries}
          title={"Portfolio"}
          pageType={"portfolio"}
        />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPortfolioEntries = await getAllPortfolioEntries(preview);
  const site = await getSite();

  return {
    props: { allPortfolioEntries, preview, site },
    revalidate: 1,
  };
}

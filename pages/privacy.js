import Container from '../components/Container/Container';
import Body from '../components/Body/Body';
import Layout from '../components/Layout/Layout';
import { getSite } from '../lib/api';
import Head from 'next/head';

export default function Index({ preview, privacy, bgGraphic }) {
  return (
    <Layout preview={preview} bgGraphic={bgGraphic}>
      <Head>
        <title>GorliPark - Privacy</title>
      </Head>
      <Container>
        <Body content={privacy} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const site = await getSite();

  return {
    props: {
      preview,
      privacy: site?.privacy || null,
      bgGraphic: site?.bgGraphic || null,
    },
    revalidate: 1,
  };
}

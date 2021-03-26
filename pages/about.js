import Container from '../components/Container/Container';
import Bio from '../components/Bio/Bio';
import Layout from '../components/Layout/Layout';
import { getSite, getAbout } from '../lib/api';
import Head from 'next/head';

export default function Index({ preview, about, bgGraphic }) {
  return (
    <Layout preview={preview} bgGraphic={bgGraphic}>
      <Head>
        <title>GorliPark - Imprint</title>
      </Head>
      <Container>
        {about.map((bio) => (
          <Bio key={bio.name} bio={bio.bio} name={bio.name} title={bio.title} image={bio.image} />
        ))}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const site = await getSite();
  const about = await getAbout();

  return {
    props: {
      preview,
      about,
      bgGraphic: site?.bgGraphic || null,
    },
    revalidate: 1,
  };
}

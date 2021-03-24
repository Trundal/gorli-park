import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Stories from "../../components/Stories/Stories";
import Layout from "../../components/Layout/Layout";
import {
  getAllPortfolioEntries,
  getPortfolioEntryAndMorePortfolioEntries,
  getSite,
} from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import Article from "../../components/Article/Article";

export default function PortfolioEntry({
  portfolioEntry,
  morePortfolioEntries,
  preview,
  site,
}) {
  const router = useRouter();
  if (!router.isFallback && !portfolioEntry?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview} bgGraphic={site ? site.bgGraphic : null}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>{portfolioEntry.title}</title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <article>
              <Article
                title={portfolioEntry.title}
                body={portfolioEntry.body}
                author={portfolioEntry.author}
                date={portfolioEntry.date}
                coverImage={portfolioEntry.coverImage}
              />
            </article>

            {/* <Comments comments={post.comments} />
            <Form _id={post._id} /> */}

            {morePortfolioEntries.length > 0 && (
              <Stories posts={morePortfolioEntries} title={"More Projects"} />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPortfolioEntryAndMorePortfolioEntries(
    params.slug,
    preview
  );
  const site = await getSite();
  console.log("===========>>>>>>>>>>>" + JSON.stringify(data));
  return {
    props: {
      preview,
      portfolioEntry: data?.portfolioEntry || null,
      morePortfolioEntries: data?.morePortfolioEntries || null,
      site,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allEntries = await getAllPortfolioEntries();
  return {
    paths:
      allEntries?.map((entry) => ({
        params: {
          slug: entry.slug,
        },
      })) || [],
    fallback: true,
  };
}

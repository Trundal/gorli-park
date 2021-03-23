import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Stories from "../../components/Stories/Stories";
import Layout from "../../components/Layout/Layout";
import {
  getAllPortfolio,
  getPortfolioEntryAndMorePortfolioEntries,
  getSite,
} from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import Article from "../../components/Article/Article";

export default function Post({
  portfolioEntry,
  morePortfolioEntries,
  preview,
  site,
}) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
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

            {moreportfolioEntries.length > 0 && (
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
  return {
    props: {
      preview,
      portfolioEntry: data?.portfolio || null,
      morePortfolioEntries: data?.morePostEntries || null,
      site,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPortfolio();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}

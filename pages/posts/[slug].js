import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import Stories from '../../components/Stories/Stories';
import Layout from '../../components/Layout/Layout';
import { getAllPostsWithSlug, getPostAndMorePosts, getSite } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import Article from '../../components/Article/Article';

export default function Post({ post, morePosts, preview, site }) {
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
              <title>{post.title}</title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <article>
              <Article
                title={post.title}
                body={post.body}
                author={post.author}
                date={post.date}
                coverImage={post.coverImage}
              />
            </article>

            {/* <Comments comments={post.comments} />
            <Form _id={post._id} /> */}

            {morePosts.length > 0 && <Stories posts={morePosts} title={'More Stories'} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const site = await getSite();
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
      site,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
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

import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import MoreStories from '../../components/MoreStories/MoreStories'
import Layout from '../../components/Layout/Layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import Article from '../../components/Article/Article'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview} bgGraphic={post ? post.bgGraphic : null}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
              <Head>
                <title>
                  {post.title} 
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <article>
                <Article 
                  title = {post.title}
                  body = {post.body}
                  author = {post.author}
                  date = {post.date}
                  coverImage = {post.coverImage}
                />
              </article>

            {/* <Comments comments={post.comments} />
            <Form _id={post._id} /> */}

            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}

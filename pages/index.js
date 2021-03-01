import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getLandingPage } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts, preview, landingPage }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const hero = landingPage

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>GorliPark</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={hero.title}
              coverImage={hero.mainImage}
            
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
            
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const landingPage = await getLandingPage()
  return {
    props: { allPosts, preview, landingPage },
    revalidate: 1
  }
}

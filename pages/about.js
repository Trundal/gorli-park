import Layout from "../components/layout";
import Image from "next/image";
import Container from "../components/container";
import { getAboutPage } from "../lib/api";
import { imageBuilder } from "../lib/sanity";
import styled from "./about.module.css";

export default function About({ mainImage, title, body }) {
  //console.log("======>>>>" + aboutPage);
  return (
    <>
      <Layout preview={false}>
        <Container>
          <div className={styled.img}>
            <Image
              alt={`imager representing the thitle of ${title}`}
              // https://www.sanity.io/docs/image-url && https://github.com/vercel/next.js/blob/master/errors/next-image-unconfigured-host.md
              src={imageBuilder(mainImage).width(500).height(500).url()}
              width={500}
              height={500}
            />
          </div>
          <div className={styled.text}>
            <div>
              <h3 className={styled.title}>{title}</h3>
            </div>
            <div>
              <p className={styled.body}>{body[0].children[0].text}</p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const aboutPage = await getAboutPage();
  return {
    props: aboutPage,
    revalidate: 1,
  };
}

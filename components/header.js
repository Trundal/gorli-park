import Link from "next/link";
import Facebook from "./images/facebook";
import Github from "./images/github";
import Twitter from "./images/twitter";
import Logo from "./logo";
import styled from "./header.module.css";

export default function Header() {
  return (
    <header className={styled.header}>
      <div className={styled.internalLinks}>
        {/* <h2>
          <Link href="/">
            <a>PROJECTS</a>
          </Link>
        </h2> */}
        <h2>
          <Link href="/stories">
            <a>STORIES</a>
          </Link>
        </h2>
        <h2>
          <Link href="/">
            <a>ABOUT US</a>
          </Link>
        </h2>
      </div>
      <Logo />
      <div className={styled.externalLinks}>
        <Link href="/">
          <div className={styled.externalLinkIcon}>
            <Github />
          </div>
        </Link>
        <Link href="/">
          <div className={styled.externalLinkIcon}>
            <Facebook />
          </div>
        </Link>
        <Link href="/">
          <div className={styled.externalLinkIcon}>
            <Twitter />
          </div>
        </Link>
      </div>
    </header>
  );
}

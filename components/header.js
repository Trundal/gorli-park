import Link from 'next/link';
import Facebook from './images/facebook';
import Github from './images/github';
import Twitter from './images/twitter';
import Logo from './logo';
import styled from './header.module.css';
import cx from 'classnames';
import { useState, useCallback } from 'react';

export default function Header() {
  function useToggle(initialValue = true) {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => {
      setValue((v) => !v);
    }, []);
    return [value, toggle];
  }
  const [isOn, toggleIsOn] = useToggle();
  return (
    <header className={cx(styled.header, { [styled.headerExpand]: !isOn })}>
      <button className={styled.tempButton} onClick={toggleIsOn}>
        ✘
      </button>
      <div className={cx(styled.internalLinks, { [styled.active]: isOn })}>
        <h2>
          <Link href="/stories">
            <a>STORIES</a>
          </Link>
        </h2>
        <h2>
          <Link href="/portfolio">
            <a>PORTFOLIO</a>
          </Link>
        </h2>
        <h2>
          <Link href="/">
            <a>ABOUT US</a>
          </Link>
        </h2>
      </div>
      <Logo className={styled.logo} />
      <div className={cx(styled.externalLinks, { [styled.active]: isOn })}>
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

// @flow strict
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage? :string
};

const Layout = ({
  children,
  title,
  description,
  socialImage
}: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = url + withPrefix(metaImage);
  const [theme, setTheme] = useState('')

  const setStyles = (element, params) => {
    for(let i in params) {
      element.style.setProperty(i, params[i]);
    }
  }
  
  // Main logic
  const themeChange = (event) => {
    let element;
    if (event) {
      element = event.target || event.currentTarget;
    } else {
      element = document.getElementById('toggle');
    }
    const body = document.querySelector("body");

    setTheme(theme === 'light' ? 'dark' : 'light')

    if (theme === "light") {
      setStyles(body, {"--background": "#3C3744", "--text": "#FBFFF1", "--accent": "#C41E3D"});
      element.classList.add(`${styles.clicked}`);
    } else {
      setStyles(body, {"--background": "#FBFFF1", "--text": "#3C3744", "--accent": "#F49F6E"});
      element.classList.remove(`${styles.clicked}`);
    }
  }

  useEffect(() => {
    themeChange();
  }, [])

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" rel="stylesheet" />
      </Helmet>
      <div className={styles['theme__toggler']}>
        <button className={styles['toggle']} id="toggle" onClick={(event) => themeChange(event)}></button>
      </div>
      {children}
    </div>
  );
};

export default Layout;

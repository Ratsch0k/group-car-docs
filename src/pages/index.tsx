import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Logo from '@site/static/img/logo-large.svg';
import HomepageLinks from "@site/src/components/HomepageLinks";
import HomepageFeatures from "@site/src/components/HomepageFeatures";


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div>
        <div className={clsx(styles.center, styles.header)}>
          <div>
            <h1 className={clsx("hero__title", styles.title)}>
              <div className={styles.logo}>
                <Logo/>
              </div>
              <div className={styles['logo-rest']}>
                {siteConfig.title.substring(1)}
              </div>
            </h1>
            <p className={clsx("hero__subtitle", styles.description)}>{siteConfig.tagline}</p>
          </div>
        </div>
        <div className={styles.center}>
            <div>
              <div className={styles.center} style={{height: '100%'}} >
                <div>
                  <HomepageFeatures />
                </div>
              </div>
            </div>
        </div>
        <HomepageLinks />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title='Documentation'
      description='Documentation for the website my-group-car.de'>
      <div className={styles.root}>
        <HomepageHeader />
      </div>

    </Layout>
  );
}

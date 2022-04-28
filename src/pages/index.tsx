import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Logo from '@site/static/img/logo-large.svg';

type Feature = {
  title: string;
  description: string;
}

const featureList: Feature[] = [
  {
    title: 'Groups',
    description: 'Create a group with your family or friends to share one or more cars together. ' +
      'Give your group a name, invite friends, and manage your cars. '
  },
  {
    title: 'Parked location',
    description: 'Let others easily know where you parked. No more confusion when the car you thought you' +
      ' parked last, is suddenly not where though it was. View on the map where exactly the car is parked' +
      'or if someone is currently using it.'
  },
  {
    title: 'View available cars',
    description: 'Instead of asking around if someone is using the car, you can just easily view if the' +
      'car you want to use is available.'
  },
  {
    title: 'Live Updates',
    description: 'All important updates, like someone starts using a car or parked it somewhere, are ' +
      'immediately visible.'
  },
];

function Features() {
  return (
    <div className={styles['feature-list']}>
      {
        featureList.map((feature) => {
           return <Feature feature={feature}/>;
        })
      }
    </div>
  )
}

function Feature({feature}: {feature: Feature}) {
  const {title, description} = feature;

  return (
    <div className={styles['feature-container']}>
      <div className={styles['feature-title']}>
        <b>{title}</b>
      </div>
      {description}
    </div>
  );
}

function Circle({duration}) {
  return (
    <svg viewBox="0 0 100 100" className={styles[`circle-${duration}`]}>
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" strokeDasharray="6 6 0 6" fill="none" strokeLinecap='round'/>
    </svg>
  );
}

function Links() {
  return (
    <div className={styles.links}>
      <Link href='https://my-group-car.de'>Visit the website</Link>
      <Link href='/docs/intro'>View the documentation</Link>
    </div>
  );
}

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
              {siteConfig.title.substring(1)}
            </h1>
            <p className={clsx("hero__subtitle", styles.description)}>{siteConfig.tagline}</p>
          </div>
        </div>
        <div className={styles.center}>
            <div>
              <div className={styles.center} style={{height: '100%'}} >
                <div>
                  <Features />
                </div>
              </div>
            </div>
        </div>
        <Links />
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
      <div className={styles.background}>
        <div className={styles['circle-wrapper']}>
          <div style={{
            transform: 'translate(-50%, -50%)',
            height: 'max(60vw, 300px)',
            width: 'max(60vw, 300px)',
          }}>
            <Circle duration={20}/>
          </div>
          <div style={{
            transform: 'translate(75vw, 25vh)',
            height: 'max(50vw, 300px)',
            width: 'max(50vw, 300px)',
          }}>
            <Circle duration={30}/>
          </div>
        </div>
      </div>

        <HomepageHeader />
      </div>

    </Layout>
  );
}

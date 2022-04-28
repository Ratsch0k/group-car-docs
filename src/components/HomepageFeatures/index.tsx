import React from 'react';
import styles from './styles.module.css';

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
    description: 'Let others easily know where you parked. Select the location on the map and your friends can see ' +
      'its new location on the map.',
  },
  {
    title: 'View available cars',
    description: 'Check if the car you want to use is available and indicate for others that you\'re using it.'
  },
  {
    title: 'Live Updates',
    description: 'All important updates, like someone starting to use a car or parking it somewhere, are ' +
      'immediately visible.'
  },
];

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

export default function HomepageFeatures() {
  return (
    <div className={styles['feature-list']}>
      {
        featureList.map((feature, index) => {
          return <Feature key={`feature-${index}`} feature={feature}/>;
        })
      }
    </div>
  )
}

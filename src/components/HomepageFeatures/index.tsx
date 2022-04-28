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

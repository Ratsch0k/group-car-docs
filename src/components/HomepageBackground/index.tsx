import styles from "./styles.module.css";
import React from "react";

function Circle({duration}) {
  return (
    <svg viewBox="0 0 100 100" className={styles[`circle-${duration}`]}>
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" strokeDasharray="6 6 0 6" fill="none" strokeLinecap='round'/>
    </svg>
  );
}

export default function HomepageBackground() {
  return (
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
  );
}
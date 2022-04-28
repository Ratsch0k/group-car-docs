import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import React from "react";

export default function HomepageLinks() {
  return (
    <div className={styles.links}>
      <Link href='https://my-group-car.de'>Visit Group Car</Link>
      <Link href='/docs/intro'>View the documentation</Link>
    </div>
  );
}
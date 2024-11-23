import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ayush Maithil</h1>
        <p className={styles.description}>
          I'm a frontend developer with 1 year of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttonContainer}>
    <a href="mailto:ayushmaithil155@gmail.com" className={styles.contactBtn}>
        Contact Me
    </a>
    <a href="https://drive.google.com/file/d/140oLCU62kyzF3a3uaKXcG1UNenhHXAan/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
        Resume
    </a>
</div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

import React from 'react'
import styles from './Hero.module.css'
import mainPhoto from '../../../images/mainPhoto.png'

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mainContainer}>

        <div className={styles.insideContainer}>
          <h1 className={styles.title}>Hi, I'm Artem</h1>
          <p className={styles.description}>I am studying to become a front-end developer <br />
          using React and Node JS</p>
          <a className={styles.contact} href="https://t.me/primo887" target="_blank">Contact me</a>
          <div className={styles.topBlur}></div>
          <div className={styles.blurUnderImage}></div>
        </div>

        <img src={mainPhoto} className={styles.mainPhoto} alt="" />
      </div>
    </section>
)
}

export default Hero
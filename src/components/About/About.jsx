import React from 'react'
import aboutImage from '../../images/aboutImage.png'
import cursorIcon from '../../images/cursorIcon.png'
import uilcon from '../../images/ourIcon.png'
import serverIcon from '../../images/serverIcon.png'
import styles from './About.module.css'


const About = () => {
  return (
    <section id='about' className={styles.container}>
      <div className={styles.mainContainer}>

        <div className={styles.info}>
          <h1>ABOUT</h1>
          <img src={aboutImage} alt="Image" className={styles.aboutImage}/>
        </div>

        <div className={styles.insideContainer}>
          <ul>
              <li>
                <div className={styles.title}>
                  <img src={cursorIcon} alt="" />
                  <h3>FrontEnd developer</h3>
                </div>
                <p>I'm studying to become a front-end developer</p>
              </li>
              <li>
                <div className={styles.title}>
                  <img src={serverIcon} alt="" />
                  <h3>BackEnd developer</h3>
                </div>
                <p>I'm just starting to get to know Backend, namely node js</p>
              </li>
              <li>
                <div className={styles.title}>
                  <img src={uilcon} alt="" />
                  <h3>My other hobbies</h3>
                </div>
                <p>I'm keen on traveling, sports, namely MMA</p>
              </li>
              
            
          </ul>
        </div>
      </div>
    </section>
)
}

export default About
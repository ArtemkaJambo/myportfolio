import React, {useState} from 'react'
import styles from './Projects.module.css'
import projectImage from '../../images/project.png'

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
        <h1>Projects</h1>
        <ul className={styles.projectList}>
            <li className={styles.projectItem}>
                <img src={projectImage} className={styles.prodImage} alt="" />
                <strong className={styles.title}>English for free</strong>
                <p className={styles.aboutProjects}>English free for beginners and advanced</p>
                <div className={styles.stack}>
                    <p className={styles.stackItem}>JavaScript</p>
                </div>
                <div className={styles.buttons}>
                    <a href="https://artemkajambo.github.io/EnglishEducation/" target='_blank'>
                        <button className={styles.buttonWay}>Demo</button>
                    </a>
                    <a href="https://github.com/ArtemkaJambo/EnglishEducation" target='_blank'> 
                     <button className={styles.buttonWay}>Github</button>
                    </a>
                </div>
            </li>
            <li className={styles.projectItem}>
                <img src={projectImage} className={styles.prodImage} alt="" />
                <strong className={styles.title}>Shop Clothes</strong>
                <p className={styles.aboutProjects}>A clothing store where you can buy some clothes for youself </p>
                <div className={styles.stack}>
                    <p className={styles.stackItem}>React</p>
                    <p className={styles.stackItem}>TypeScript</p>
                </div>
                <div className={styles.buttons}>
                    <a href="https://shop-clothes-tau.vercel.app/" target='_blank'>
                        <button className={styles.buttonWay}>Demo</button>
                    </a>
                    <a href="https://github.com/ArtemkaJambo/Shop-Clothes"  target='_blank'>
                      <button className={styles.buttonWay}>Github</button>

                    </a>
                </div>
            </li>
        </ul>
    </section>
)
}

export default Projects
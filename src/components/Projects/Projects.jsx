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
                <strong className={styles.title}>Англійська for free</strong>
                <p className={styles.aboutProjects}>Безкоштовна практика англійської мови для початківців та для просунутих</p>
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
            {/* <li className={styles.projectItem}>
                <img src={projectImage} className={styles.prodImage} alt="" />
                <strong className={styles.title}>Project A</strong>
                <p className={styles.aboutProjects}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, ea?</p>
                <div className={styles.stack}>
                    <p className={styles.stackItem}>JavaScript</p>
                    <p className={styles.stackItem}>React</p>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.buttonWay}>Demo</button>
                    <button className={styles.buttonWay}>Github</button>
                </div>
            </li> */}
        </ul>
    </section>
)
}

export default Projects
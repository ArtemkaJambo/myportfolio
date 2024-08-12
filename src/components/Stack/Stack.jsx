import React from 'react'
import styles from './Stack.module.css'
import htmlIcon from '../../images/html.png'
import reactIcon from '../../images/react.png'
import cssIcon from '../../images/css.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import nodeIcon from '../../images/node.png'


const Stack = () => {
  return (
    <section id='stack' className={styles.container}>
        <h1 className={styles.title}>My Stack</h1>
        <div className={styles.firstBlur}></div>
            <ul className={styles.stackList}>
                <li className={styles.stackItem}>
                    <img src={htmlIcon} alt="" />
                    <h4>HTML</h4>
                </li>
                <li className={styles.stackItem}>
                    <img src={reactIcon} alt="" />
                    <h4>REACT</h4>
                </li>
                <li className={styles.stackItem}>
                    <img src={cssIcon} alt="" />
                    <h4>CSS</h4>
                </li>
                <li className={styles.stackItem}>
                    <FontAwesomeIcon icon={faJs} className={styles.jsIconN} />
                    <h4>JavaScript</h4>
                </li>
                {/* <li className={styles.stackItem}>
                    <img src={nodeIcon} alt="" />
                    <h4>NodeJS</h4>
                </li>             */}
            </ul>
        <div className={styles.lastBlur}></div>
        
    </section>
)
}

export default Stack
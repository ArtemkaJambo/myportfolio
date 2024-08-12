import React from 'react'
import styles from './Contact.module.css'
import emailIcon from '../../images/emailIcon.png'
import gitHubIcon from '../../images/githubIcon.png'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <h1>Feel free to contact me</h1>
        <ul className={styles.feedback}>
            <li>
                <img src={emailIcon} className={styles.connectedIcon} alt="" />
                <p className={styles.name}>artemmko2@gmail.com</p>
            </li>
            <li>
                <img src={gitHubIcon} className={styles.connectedIcon} alt="" />
                <p className={styles.name}>github.com/ArtemkaJambo</p>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
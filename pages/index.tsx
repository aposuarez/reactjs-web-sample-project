import BaseLayout from "../components/BaseLayout";
import React, { useState,useEffect } from "react";
import { useTypingEffect } from "../hooks/useTypingAnimation";
import styles from './Home.module.css'
import { getHomeScreenContent } from "../api/firebase/remote-config/RemoteConfigService";
import Link from "next/link";

type HomeScreenContent = {
  welcomeTitle: string,
  welcomeDescription: string,
  aboutMeTitle: string,
  aboutMeSubtitle: string,
  aboutMeDescription: string,
  skillsList: string[]
}

const HomeScreen = () => {

  const [content, setContent] = useState<HomeScreenContent>(null)
  const [shouldTypeNickname, setShouldTypeNickname] = useState(false)
  const typedName = useTypingEffect(content?.aboutMeTitle, 150)
  const typedNickname = useTypingEffect(shouldTypeNickname ? content?.aboutMeSubtitle : '', 50)

  useEffect(()=> {
    setHomeScreenContent()
  },[])

  useEffect(() => {
    if (typedNickname.isFinished) {
      setShouldTypeNickname(false)
    }
    else {
      if (typedName.isFinished) {
        const timeout = setTimeout(() => {
          setShouldTypeNickname(true)
        }, 1000) 
  
        return () => clearTimeout(timeout)
      }
    }
  }, [typedName.isFinished, typedNickname.isFinished])

  const setHomeScreenContent =async()=> {
    await getHomeScreenContent().then((remoteContent) => {
      setContent(JSON.parse(remoteContent))
    })
  }

  return (
    <BaseLayout>
      <div className={styles.root}>

        <div className={styles.welcomeContainer}>
          <div className={styles.welcomeTextContainer}>
            <div className={styles.welcomeTitle}>{content?.welcomeTitle}</div>
            <div className={styles.welcomeDescription}>{content?.welcomeDescription}</div>
          </div>
          <img src='/images/masthead.jpg' alt="Masthead" className={styles.welcomeImage} />
        </div>

        <div id="AboutMe" className={styles.body}>
        <img src='/images/self-ghibli.jpg' alt="JM Suarez Self" className={styles.aboutMeImage} />
          <div className={styles.aboutMeContent}>
            <div>
              <div className={styles.aboutMeTitle}>
                {typedName.displayedText}
                <span className={shouldTypeNickname || typedNickname.isFinished ? styles.gone : styles.blinking}>|</span>
              </div>
              <div className={styles.aboutMeSubtitle}>
                {typedNickname.displayedText}
                <span className={typedName?.isFinished && !typedNickname.isFinished ? styles.blinking : styles.gone}>|</span>
              </div>
            </div>
            <div className={`${styles.aboutMeDescription} ${typedNickname.isFinished ? styles.show : ''}`}>{content?.aboutMeDescription}</div>
          </div>
        </div>

        <div id="Skills" className={styles.skillsContainer}>
          <h1 className={styles.skillsLabel}>Relevant Skills</h1>
          <div className={styles.skillsGridContainer}>
            {
              content?.skillsList.map((item, index) => (
                <div className={styles.skillsItem}>{item}</div>
              ))
            }
          </div>
          <img src='/images/skills.png' alt="JM Suarez Self" className={styles.skillsImage} />
        </div>

        <div id="ContactMe" className={styles.contactMeContainer}>
          <h1 className={styles.contactMeLabel}>Contact Me</h1>
            <div className={styles.contactMeText}>Address: NCR, Philippines</div>
            <div className={styles.contactMeText}>Email: jmsuarez23@yahoo.com</div>
            <div className={styles.contactMeText}>Mobile No.: +639214980478</div>
            <div className={styles.contactMeText}>LinkedIn: <a className={styles.contactMeLink} href="https://www.linkedin.com/in/john-michael-suarez-280bb6166/" target="_blank">https://www.linkedin.com/in/john-michael-suarez-280bb6166/</a></div>
        </div>


      </div>
    </BaseLayout>
  )
}

export default HomeScreen;

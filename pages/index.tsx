import BaseLayout from "../components/BaseLayout";
import React, { useState,useEffect } from "react";
import { fetchAndActivate, getValue } from "firebase/remote-config";
import { remoteConfig } from "../api/firebase/remote-config";
import { RemoteConfigKeys, SAMPLE_TEXT } from "../constants/strings";
import { useTypingEffect } from "../hooks/useTypingAnimation";
import styles from './Home.module.css'
import Carousel from "../components/Carousel";
import ImageGrid from "../components/ImageGrid";
import ContactForm from "../components/ContactForm";
import { getHomeScreenContent } from "../api/firebase/remote-config/RemoteConfigService";

type HomeScreenContent = {
  welcomeTitle: string,
  welcomeDescription: string,
  aboutMeTitle: string,
  aboutMeSubtitle: string,
  aboutMeDescription: string
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
          <div className={styles.welcomeTitle}>{content?.welcomeTitle}</div>
          <div className={styles.welcomeDescription}>{content?.welcomeDescription}</div>
          <img src='/images/masthead.jpg' alt="JM Suarez Self" className={styles.welcomeImage} />
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

      </div>
    </BaseLayout>
  )
}

export default HomeScreen;

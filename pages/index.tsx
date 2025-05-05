import BaseLayout from "../components/BaseLayout";
import React, { useState,useEffect } from "react";
import { fetchAndActivate, getValue } from "firebase/remote-config";
import { remoteConfig } from "../api/firebase/remote-config";
import { RemoteConfigKeys, SAMPLE_TEXT } from "../constants/strings";
import styles from './Home.module.css'
import Carousel from "../components/Carousel";
import ImageGrid from "../components/ImageGrid";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


const HomePage = () => {

  const [welcomeTitle, setWelcomeTitle] = useState('')

  useEffect(()=> {
    fetchAndActivate(remoteConfig)
    .then(() => {
      const welcomeTitleValue = getValue(remoteConfig, RemoteConfigKeys.welcomeTitle).asString()
      setWelcomeTitle(welcomeTitleValue)
    })
  },[])

  return (
    <BaseLayout>
      <div className={styles.root}>
        <div className={styles.welcomeContainer}>
          <div className={styles.welcomeTitle}>{welcomeTitle}</div>
          <div className={styles.welcomeDescription}>{SAMPLE_TEXT.default}</div>
        </div>
        <div id="Services" className={styles.body}>
          <div className={styles.carouselContainer}>
            <Carousel />
          </div>
        </div>
        <div id="OurClients" className={styles.gridImageContainer}>
          <h1 className={styles.gridImageContainerLabel}>Our Clients</h1>
          <ImageGrid />
        </div>
        <div id="ContactUs" className={styles.bodyAlternate}>
          <h1 className={styles.contactUsLabel}>Contact Us</h1>
          <ContactForm />
        </div>
      </div>
    </BaseLayout>
  )
}

export default HomePage;

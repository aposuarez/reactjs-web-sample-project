import { useState, useEffect } from 'react'
import styles from './Maintenance.module.css'
import { getMaintenanceScreenContent } from '../../api/firebase/remote-config/RemoteConfigService'
import { NextPage } from 'next'

type MaintenanceScreenContent = {
    maintenanceTitle: string,
    maintenanceDescription: string
}

const MaintenanceScreen: NextPage = () => {

    const [content, setContent] = useState<MaintenanceScreenContent>(null)

    useEffect(()=> {
        setMaintenanceScreenContent()
    },[])
    
    const setMaintenanceScreenContent =async()=> {
        await getMaintenanceScreenContent().then((remoteContent) => {
          setContent(JSON.parse(remoteContent))
        })
    }

    return (
        <div className={styles.root}>
            <div className={styles.maintenanceContent}>
                <div className={styles.maintenanceTitle}>{content?.maintenanceTitle}</div>
                <div className={styles.maintenanceDescription}>{content?.maintenanceDescription}</div>
            </div>
        </div>
    )
}

export default MaintenanceScreen
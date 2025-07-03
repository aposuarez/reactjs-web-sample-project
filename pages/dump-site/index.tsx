import { useState, useEffect } from 'react'
import BaseLayout from '../../components/BaseLayout'
import styles from './DumpSite.module.css'
import { getDumpSiteScreenContent } from '../../api/firebase/remote-config/RemoteConfigService'
import { SandboxProject } from '../../types/SandboxProject'
import { SAMPLE_TEXT } from '../../constants/strings'
import { useRouter } from 'next/router'
import { NextPage } from 'next'

type DumpSiteContent = {
  sandboxTitle: string,
  sandboxDescription: string,
  sandboxProjects: SandboxProject[]
}

const DumpSiteScreen: NextPage =()=> {

    const router = useRouter()
    const [content, setContent] = useState<DumpSiteContent>(null)

    useEffect(()=> {
        setDumpSiteScreenContent()
    },[])

    useEffect(()=> {
        console.log("content ->", content)
    },[content])

    const setDumpSiteScreenContent =async()=> {
        await getDumpSiteScreenContent().then((remoteContent) => {
          setContent(JSON.parse(remoteContent))
        })
    }

    const navigateToProject =(route: string)=> {
        router.push(`${router.asPath}/${route}`)
    }

    const navigateToMaintenance =()=> {
        router.push('maintenance')
    }

    return(
        <BaseLayout title="Sandbox" isFooterVisible={false}>
        <div className={styles.root}>
            <div className={styles.sandboxWelcomeContainer}>
                <div className={styles.sandboxTitle}>{content?.sandboxTitle}</div>
                <div className={styles.sandboxDescription}>{content?.sandboxDescription}</div>
                {
                    content?.sandboxProjects.length === 3
                    ?
                    <div className={styles.sandboxProjectTable}>
                        <div className={styles.sandboxProjectColumnOne} onClick={()=>navigateToProject(content?.sandboxProjects[0].navigationTarget)}>
                            <div className={styles.sandboxProjectTitle}>{content?.sandboxProjects[0].title}</div>
                            <div className={styles.sandboxProjectDescription}>{content?.sandboxProjects[0].description}</div>
                        </div>
                        <div className={styles.sandboxProjectColumnTwo} onClick={()=>navigateToProject(content?.sandboxProjects[1].navigationTarget)}>
                            <div className={styles.sandboxProjectTitle}>{content?.sandboxProjects[1].title}</div>
                            <div className={styles.sandboxProjectDescription}>{content?.sandboxProjects[1].description}</div>
                        </div>
                        <div className={styles.sandboxProjectColumnThree} onClick={navigateToMaintenance}>
                            <div className={styles.sandboxProjectTitle}>{content?.sandboxProjects[2].title}</div>
                            <div className={styles.sandboxProjectDescription}>{content?.sandboxProjects[2].description}</div>
                        </div>
                    </div>
                    : <></>
                }
            </div>
        </div>
        </BaseLayout>
    )
}

export default DumpSiteScreen
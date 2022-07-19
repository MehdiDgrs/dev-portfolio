import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Headvideo from '../components/headvideo';
import AboutMe from "../components/aboutme"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Degryse Mehdi Developpeur Web Front End </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Headvideo/>
      <AboutMe/>
     
    </div>
  )
}

export default Home

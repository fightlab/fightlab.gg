import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fight Lab | Fighting Game Community</title>
        <meta name="description" content="We run events that promote the social nature of gaming, and focus on the competitive nature of fighting games." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fight Lab
          <br />
          <small>Fighting Game Community</small>
        </h1>

        <p className={styles.description}>
          We run events that promote the social nature of gaming, and focus on the competitive nature of fighting games.
        </p>
        
        <p className={styles.description}>
          Platform coming soon.<br />Follow us on social:
        </p>

        <p className={styles.description}>
          <a href="https://twitter.com/fight_lab">Twitter</a> | <a href="https://twitch.tv/fightlab">Twitch</a> | <a href="https://www.youtube.com/c/FightLabBrighton">YouTube</a> | <a href="https://discord.gg/rjpDJdz">Discord</a> | <a href="https://github.com/fightlab">GitHub</a>
        </p>
      </main>
    </div>
  )
}

export default Home

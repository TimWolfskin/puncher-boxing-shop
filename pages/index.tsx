import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Benefits from '../components/Benefits'
import Header from '../components/Header'
import Landing from '../components/Landing'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>punchR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Landing />
        <Benefits />
      </main>
    </div>
  )
}

export default Home

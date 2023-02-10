import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Benefits from '../components/Benefits'
import Header from '../components/Header'
import Landing from '../components/Landing'
import New from '../components/New'
import { GetServerSideProps } from "next";
import { fetchCategories } from "../utils/fetchCategories";

interface Props {
  categories: Category[]
}

const Home = ({categories}: Props) => {
  console.log(categories)
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
        <New  categories={categories} />
      </main>
    </div>
  )
}

export default Home

//: NextPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories()


  return {
    props: {
      categories,
    },
  }
}
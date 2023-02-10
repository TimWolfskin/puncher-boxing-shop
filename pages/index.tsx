import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Benefits from '../components/Benefits'
import Header from '../components/Header'
import Landing from '../components/Landing'
import New from '../components/New'
import { GetServerSideProps } from "next";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchNewProducts } from '../utils/fetchNewProducts'

interface Props {
  categories: Category[];
  newProducts: NewProduct[]
}

const Home = ({categories, newProducts}: Props) => {
  console.log(newProducts)
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
        <New  categories={categories} newProducts={newProducts} />
      </main>
    </div>
  )
}

export default Home

//: NextPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories()
  const newProducts = await fetchNewProducts()


  return {
    props: {
      categories,
      newProducts
    },
  }
}
import Head from 'next/head'
import Image from 'next/image'
import { SiteButton } from '../atoms/Main_button'
import Link from 'next/link'
import Layout from '../components/Layout'
import Listing from '../organizations/Listing'
import Banner from '../organizations/Banner'

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Banner />
        <h1>MOST POPULAR FOOTBALL TICKETS</h1>
        <Listing />
      </div>
    </Layout>
  )
}

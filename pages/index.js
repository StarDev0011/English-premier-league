import Head from 'next/head'
import Image from 'next/image'
import { SiteButton } from '../atoms/Main_button'
import Link from 'next/link'
import Layout from '../components/Layout'
import Listing from '../organizations/Listing'

export default function Home() {
  return (
    <Layout>
    <div className="container">
      <SiteButton buttonTheme="light" buttonBorder={true}>
        <Link href="/#limitless">View Release</Link>
      </SiteButton>
      <h1>MOST POPULAR FOOTBALL TICKETS</h1>
      <Listing />
    </div>
    </Layout>
  )
}

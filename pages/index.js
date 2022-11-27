import Head from 'next/head'
import Image from 'next/image'
import { SiteButton } from '../atoms/Main_button'
import Link from 'next/link'
import axios from "axios";
import Layout from '../components/Layout'
import Listing from '../organizations/Listing'
import Banner from '../organizations/Banner'
import SideBar from '../molecules/SideBar'
import News from '../molecules/News'
import Transactions from '../molecules/Transactions'

export default function Home({list}) {
  return (
    <Layout>
      <div className="container">
        <Banner />
        <div className='body'>
          <div className='left_bar'>
            <Listing title="MOST POPULAR FOOTBALL TICKETS" list={list} />
            <div className='articles'>
              <div className='articles_list'>
                <News />
              </div>
              <div className='transactions_list'>
                <Transactions />
              </div>
            </div>
          </div>
          <div className='right_bar'>
            <SideBar />
          </div>
        </div>
        <div className='football_tickets'>
          Football Tickets
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const upcoming_url = process.env.RECENT_TEN_URI
  const response = await axios.get(upcoming_url)

  return {
      props: {list: response.data.payload.results}
  }
}
import Head from 'next/head'
import Image from 'next/image'
import { SiteButton } from '../atoms/Main_button'
import Link from 'next/link'
import Layout from '../components/Layout'
import Listing from '../organizations/Listing'
import Banner from '../organizations/Banner'
import SideBar from '../molecules/SideBar'

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Banner />
        <div className='body'>
          <div className='left_bar'>
            <Listing title="MOST POPULAR FOOTBALL TICKETS" />
            <div className='articles'>
              <div className='articles_list'>
                Articles
              </div>
              <div className='transactions_list'>
                Transactions
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

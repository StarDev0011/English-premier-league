import Header from "./Header"
import Footer from "./Footer"
import Head from 'next/head'

export default function Layout({children}) {
    return(
        <>
            <Head>
                <title>VIP Sport Ticketing</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
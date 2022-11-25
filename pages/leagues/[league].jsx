import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { ListingWrapper, LeagueWrapper, LeagueBody, LeagueBodyTop, LeagueBodyBottom } from "../../organizations/Listing/styles";
import Link from "next/link";
import { SiteButton } from "../../atoms/Main_button";
import Layout from "../../components/Layout";
import WhyBook from "../../components/WhyBook";
import { getDate, getMonth, getYear, getHours, getDay } from 'date-fns'
import NeedToKnow from "../../components/Need to know";

export default function Product() {
  const Monthdata = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const Daydata = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const [list, setList] = useState([]);
  const [league, setLeague] = useState([])
  const [name, setName] = useState("")
  const [stadium, setStadium] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [availableTickets, setAvailableTickets] = useState("")
  const [startPrice, setStartPrice] = useState("")
  const [map, setMap] = useState("")
  const [date, setDate] = useState("00T00:00")
  const router = useRouter();
  const url_prefix =
    "https://encompasscors.herokuapp.com/https://www.ticombo.com/prod/discovery/events/";
  const url_suffix =
    "/listings?page=1&limit=20&include=$total&populate=rel.user:firstName,displayName,urlPicture,trustedSeller,metadata%7Creservations:amount,expiresAt,price&sort=bestprice&sellerType=allSellers";

  const league_tickets_url = url_prefix + router.query.league + url_suffix;
  const league_data_url = "https://encompasscors.herokuapp.com/https://www.ticombo.com/prod/discovery/events?id=" + router.query.id

  function getTickets() {
    axios.get(league_tickets_url).then((res) => {
      setList(res.data.payload);
    });
  }
  
  function getLeague() {
    axios.get(league_data_url).then((res) => {
      setLeague(res.data.payload[0])
      setName(res.data.payload[0].description)
      setStadium(res.data.payload[0].metadata.venue)
      setCity(res.data.payload[0].location.city)
      setCountry(res.data.payload[0].location.country)
      setAvailableTickets(res.data.payload[0].listing.availableTickets)
      setStartPrice(res.data.payload[0].listing.startPrice)
      setMap(res.data.payload[0].metadata.venueMapUrl)
      setDate(res.data.payload[0].date.start)
    })
  }
  useEffect(() => {
    getTickets();
  }, []);
  useEffect(() => {
    getLeague();
  }, []);
  return (
    <Layout>
      <LeagueWrapper>
        <LeagueBody>
          <LeagueBodyTop>
            <div className="league_summary">
              <div className="unique_info">
                <h3>English Premier League</h3>
                <h1>{name}</h1>
                <p className="location">{stadium}, {city}, {country}</p>
                <h4 className="start_date">
                  {Daydata[getDay(new Date(date))]}, {getDate(new Date(date))} {Monthdata[getMonth(new Date(date))]} {getYear(new Date(date))} {getHours(new Date(date))}:{date.split('T')[1].split(':')[1]}
                </h4>
                <p className="subject_to_change">* Fixtures are subject to change.</p>
                <div className="available_tickets"><span className="tickets_amount">{availableTickets}</span> <p>Tickets available</p></div>
                <p className="price">from <span className="cost">€ {startPrice}</span></p>
              </div>
              <div className="general_description">
                <p>Find your seats, select the number of tickets, then click <b>BUY</b> to proceed.</p>
                <p><b>Whose tickets are listed below?</b></p>
                <p>All the tickets are listed and priced by approved ticket specialists.</p>
                <p>Each ticket specialist competes with one another to provide you the lowest prices & the largest selection on the internet.</p>
              </div>
            </div>
            <div className="league_why_book">
              <WhyBook />
            </div>
          </LeagueBodyTop>
          <LeagueBodyBottom>
            <div className="all_tickets">
              <ListingWrapper className="league_listing">
              <h1 className="primary-text">Available tickets</h1>
                {list.map((item) => (
                  <div className="league_item" key={item._id}>
                    <div className="seat">
                      {item.ticket.section} - {item.ticket.category}
                    </div>
                    <div className="ticket-price">
                      <p>€{item.price.sellingEur} per ticket</p>
                      <SiteButton buttonTheme="light" buttonBorder={false}>
                        <Link href="/#buy">Buy</Link>
                      </SiteButton>
                    </div>
                  </div>
                ))}
              </ListingWrapper>
            </div>
            <div className="stadium_info">
              <div className="stadium">
                <h1 className="primary-text">{stadium}</h1>
                <img src={map} />
              </div>
              <NeedToKnow />
            </div>      
          </LeagueBodyBottom>
        </LeagueBody>
      </LeagueWrapper>
    </Layout>
  );
}

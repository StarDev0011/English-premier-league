import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { ListingWrapper } from "../../organizations/Listing/styles";
import Link from "next/link";
import { SiteButton } from "../../atoms/Main_button";
import { LeagueWrapper, LeagueBody, LeagueBodyTop, LeagueBodyBottom } from "./styles";
import Layout from "../../components/Layout";

export default function Product() {
  const [list, setList] = useState([]);
  const [league, setLeague] = useState([])
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
      // console.log(res.data.payload[0]);
      // console.log(res.data.payload[0].filters.team);
      // console.log(res.data.payload.results[0].inventory.startPrice);
      // console.log(res.data.payload.results[0].inventory.forSale);
      // console.log(res.data.payload.results[0].img);
    });
  }
  
  function getLeague() {
    axios.get(league_data_url).then((res) => {
      setLeague(res.data.payload[0])
      console.log(res.data.payload[0])
    })
  }
  useEffect(() => {
    getTickets();
    getLeague();
  }, []);
  return (
    <Layout>
      <LeagueWrapper>
        <LeagueBody>
          <LeagueBodyTop>
            <div className="league_summary">
              {league.name}
              {league.metadata.venue},{league.location.city},{league.location.country}
              {league.listing.availableTickets} Tickets available
              from {league.listing.startPrice}
              <p>Find your seats, select the number of tickets, then click <b>BUY</b> to proceed.</p>
              <p><b>Whose tickets are listed below?</b></p>
              <p>All the tickets are listed and priced by approved ticket specialists.</p>
              <p>Each ticket specialist competes with one another to provide you the lowest prices & the largest selection on the internet.</p>
            </div>
          </LeagueBodyTop>
          <LeagueBodyBottom>
            <ListingWrapper className="league_listing">
              {list.map((item) => (
                <div className="league_item" key={item._id}>
                  <div className="event-date">{item.price.sellingEur}</div>
                </div>
              ))}
            </ListingWrapper>
            <img src={league.metadata.venueMapUrl} />
          </LeagueBodyBottom>
        </LeagueBody>
      </LeagueWrapper>
    </Layout>
  );
}

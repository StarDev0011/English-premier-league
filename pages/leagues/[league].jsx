import axios from "axios";
import {
  ListingWrapper,
  LeagueWrapper,
  LeagueBody,
  LeagueBodyTop,
  LeagueBodyBottom,
} from "../../organizations/Listing/styles";
import Link from "next/link";
import { SiteButton } from "../../atoms/Main_button";
import Layout from "../../components/Layout";
import WhyBook from "../../components/WhyBook";
import { getDate, getMonth, getYear, getHours, getDay } from "date-fns";
import NeedToKnow from "../../components/Need to know";
import Select_Quantity from "../../atoms/Select_Quantity";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledMapContainer = styled.div`
  &.stadium_map #stadium [data-seat="${props => props['data-hovered']}"] {
    fill: yellow;
  }
`;


// .iueLkQ .stadium_map svg g[data-category="shortside-upper-tier"] polygon,.iueLkQ .stadium_map svg [data-seat="shortside-upper-tier"]{fill:red;}
export default function League({ tickets, league_data }) {
  const [mapSvg, setMapSvg] = useState("");
  const [hovered, setHover] = useState("shortside-upper-tier");

  useEffect(() => {
    fetch(league_data.metadata.venueMapUrl)
      .then((res) => res.text())
      .then((data) => {
        setMapSvg(data);
      });
  }, [league_data]);

  const Monthdata = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const Daydata = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const date = league_data.date.start;
  const ticketsNormalized = tickets.map((item) => {
    return { ...item, categoryClass: item.ticket?.category?.toLowerCase().replaceAll(" ", "-") };
  });

  return (
    <Layout>
      <LeagueWrapper>
        <LeagueBody>
          <LeagueBodyTop>
            <div className="league_summary">
              <div className="unique_info">
                <h3>English Premier League</h3>
                <h1>{league_data.description}</h1>
                <p className="location">
                  {league_data.metadata.venue}, {league_data.location.city},{" "}
                  {league_data.location.country}
                </p>
                <h4 className="start_date">
                  {Daydata[getDay(new Date(date))]}, {getDate(new Date(date))}{" "}
                  {Monthdata[getMonth(new Date(date))]} {getYear(new Date(date))}{" "}
                  {getHours(new Date(date))}:{date.split("T")[1].split(":")[1]}
                </h4>
                <p className="subject_to_change">* Fixtures are subject to change.</p>
                <div className="available_tickets">
                  <span className="tickets_amount">
                    {tickets.length > 0 ? league_data.listing.availableTickets : 0}
                  </span>{" "}
                  <p>Tickets available</p>
                </div>
                {tickets.length > 0 ? (
                  <p className="price">
                    from <span className="cost">€ {league_data.listing.startPrice}</span>
                  </p>
                ) : (
                  <p className="sold_out">Sold Out</p>
                )}
              </div>
              <div className="general_description">
                <p>
                  Find your seats, select the number of tickets, then click <b>BUY</b> to proceed.
                </p>
                <p>
                  <b>Whose tickets are listed below?</b>
                </p>
                <p>All the tickets are listed and priced by approved ticket specialists.</p>
                <p>
                  Each ticket specialist competes with one another to provide you the lowest prices
                  & the largest selection on the internet.
                </p>
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
                {ticketsNormalized.length > 0 ? (
                  ticketsNormalized.map((item) => (
                    <div
                      className="league_item"
                      key={item._id}
                      onMouseEnter={() => setHover(item.categoryClass)}
                      onMouseLeave={() => setHover("")}
                    >
                      <div className="seat">
                        <p>
                          {item.ticket.section} - {item.ticket.category}
                        </p>
                        <Select_Quantity available_quantity={item.ticket.seating.length} />
                      </div>
                      <div className="ticket-price">
                        <p>
                          <span>€{item.price.sellingEur.toFixed(2)}</span> per ticket
                        </p>
                        <SiteButton buttonTheme="light" buttonBorder={false}>
                          <Link href="/#buy">Buy</Link>
                        </SiteButton>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No Available Tickets</p>
                )}
              </ListingWrapper>
            </div>
            <div className="stadium_info">
              <div className="stadium">
                <h1 className="primary-text">{league_data.metadata.venue}</h1>
                <StyledMapContainer
                  data-hovered={hovered}
                  className="stadium_map"
                  dangerouslySetInnerHTML={{ __html: mapSvg }}
                ></StyledMapContainer>
              </div>
              <NeedToKnow />
            </div>
          </LeagueBodyBottom>
        </LeagueBody>
      </LeagueWrapper>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const league = ctx.params.league;
  const id = ctx.query.id;

  const league_tickets_url = process.env.LEAGUE_PRE_URI + league + process.env.LEAGUE_SUFF_URI;
  const league_data_url = process.env.LEAGUE_DETAIL_URI + id;

  const tickets = await axios.get(league_tickets_url);
  const league_detail = await axios.get(league_data_url);

  return {
    props: { tickets: tickets.data.payload, league_data: league_detail.data.payload[0] }, // will be passed to the page component as props
  };
}
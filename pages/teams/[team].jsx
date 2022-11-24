import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { ListingWrapper, TeamWrapper, TeamBody } from "../../organizations/Listing/styles";
import Layout from "../../components/Layout";
import { getDate, getMonth, getYear, getHours } from 'date-fns'
import { SiteButton } from "../../atoms/Main_button";
import Link from "next/link";
import WhyBook from "../../components/WhyBook";
import Popular from "../../components/Leagues";

export default function Product() {
  const [list, setList] = useState([]);
  const Monthdata = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const router = useRouter();
  const team_url = "https://encompasscors.herokuapp.com/https://www.ticombo.com/prod/discovery/search/events?keyword=&competition=Premier%20League&sort=upcoming&team=" + router.query.team + "&page=1&limit=20";
      
  function getTestData() {
    axios.get(team_url).then((res) => {
      setList(res.data.payload.results);
      console.log(res.data.payload);
    });
  }
  useEffect(() => {
    getTestData();
  }, []);
  return (
    <Layout>
      <TeamWrapper>
        <TeamBody>
          <div className="team_matches">
            <ListingWrapper className="league_listing">
              {list.map((item) => (
                  <div className="league_item" key={item.name}>
                      <div className="event-date">
                          <div className="month">{Monthdata[getMonth(new Date(item.date.from))]}</div>
                          <div className="date">{getDate(new Date(item.date.from))}</div>
                          <div className="year">{getYear(new Date(item.date.from))}</div>
                      </div>
                      <div className="event-info">
                          <div className="event-name">{item.name}</div>
                          <div className="event-description">{item.description}</div>
                          <div className="event-location">{getHours(new Date(item.date.from),'kk')}:{item.date.from.split('T')[1].split(':')[1]} - {item.location.venue}, {item.location.city}, {item.location.country}</div>
                      </div>
                      <div className="event-action">
                          <SiteButton buttonTheme="light" buttonBorder={false}>
                              <Link href={`/leagues/${item.eventId}?id=${item.safeUrlName}`}>View Tickets</Link>
                          </SiteButton>
                      </div>
                  </div>
              ))}
            </ListingWrapper>
          </div>
          <div className="team_sidebar">
            <WhyBook />
            <Popular />
          </div>
        </TeamBody>
      </TeamWrapper>
    </Layout>
  );
}

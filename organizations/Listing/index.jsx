import axios from "axios";
import { useEffect, useState } from "react";
import { SiteButton } from "../../atoms/Main_button";
import Link from "next/link";

import {
    ListingWrapper
  } from './styles'

export default function Listing() {
    const [list, setList] = useState([]);
    const test_url = "https://encompasscors.herokuapp.com/https://www.ticombo.com/prod/discovery/search/events?keyword=&competition=Premier%20League&sort=upcoming&page=1&limit=20";

    function getTestData() {
        axios.get(test_url)
        .then(res =>{
            setList(res.data.payload.results);
            console.log(res.data.payload.results[3]);
            // console.log(res.data.payload.results[0].filters.team);
            // console.log(res.data.payload.results[0].inventory.startPrice);
            // console.log(res.data.payload.results[0].inventory.forSale);
            // console.log(res.data.payload.results[0].img);
        })
      }
      useEffect(()=>{
        getTestData();
      },[]);
    return(
        <>
            <ListingWrapper className="league_listing">
                {list.map((item) => (
                    <div className="league_item" key={item.name}>
                        <div className="event-date">{item.date.from}</div>
                        <div className="event-info">
                            <div className="event-name">{item.name}</div>
                            <div className="event-description">{item.description}</div>
                            <div className="event-location">{item.location.venue}, {item.location.city}, {item.location.country}</div>
                        </div>
                        <div className="event-action">
                            <SiteButton buttonTheme="light" buttonBorder={false}>
                                <Link href="/#limitless">View Tickets</Link>
                            </SiteButton>
                        </div>
                    </div>
                ))}
            </ListingWrapper>
        </>
    )
}
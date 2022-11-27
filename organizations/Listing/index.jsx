import axios from "axios";
import { useEffect, useState } from "react";
import { SiteButton } from "../../atoms/Main_button";
import Link from "next/link";
import { getDate, getMonth, getYear, getHours } from 'date-fns'

import { ListingWrapper } from './styles'

export default function Listing({title, list}) {
    const Monthdata = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      
    return(
        <>
            <ListingWrapper className="league_listing">
                <h1 className="primary-text">{title}</h1>
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
        </>
    )
}


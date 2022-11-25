import { PopularLeaguesWrapper } from "./styles"
import Link from "next/link"

export default function Popular() {
    return(
        <PopularLeaguesWrapper>
            <h1 className="primary-text">English Premier League</h1>
            <ul>
                <li><Link href="/teams/Liverpool%20FC">Liverpool Tickets</Link></li>
                <li><Link href="/teams/Manchester%20United%20FC">Manchester United Tickets</Link></li>
                <li><Link href="/teams/Arsenal%20FC">Arsenal Tickets</Link></li>
                <li><Link href="/teams/Chelsea%20FC">Chelsea Tickets</Link></li>
                <li><Link href="/All">All tickets</Link></li>
            </ul>
        </PopularLeaguesWrapper>
    )
}
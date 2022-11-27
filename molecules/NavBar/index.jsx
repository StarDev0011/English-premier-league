import Link from "next/link";
import { NavBarWrapper, NavBarBody } from "./styles"

export default function Nav() {
    const MenuData = [
        {
            key: 'Liverpool',
            label:"Liverpool FC"
        },
        {
            key: 'Manchester United FC',
            label:"Manchester United FC"
        },
        {
            key: 'Arsenal',
            label:"Arsenal FC"
        },
        {
            key: 'Chelsea',
            label:"Chelsea FC"
        }
    ]
    return (
        <NavBarWrapper>
            <NavBarBody>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    {MenuData.map((item) => (
                        <li key={item.label}>
                            <Link href={`/teams/${item.label}`}>{item.key}</Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/All">View All</Link>
                    </li>
                </ul>
            </NavBarBody>
        </NavBarWrapper>
    )
}
import Link from "next/link";
import { NavBarWrapper, NavBarBody } from "./styles"

export default function Nav() {
    const MenuData = [
        {
            key: 'Liverpool',
            label:"liverpool"
        },
        {
            key: 'Manchester United',
            label:"manchester-united"
        },
        {
            key: 'Arsenal',
            label:"arsenal"
        },
        {
            key: 'Chelsea',
            label:"chelsea"
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
                </ul>
            </NavBarBody>
        </NavBarWrapper>
    )
}
import { SiteButton } from "../../atoms/Main_button"
import { WhyBookWrapper } from "./styles"

export default function WhyBook() {
    return(
        <WhyBookWrapper>
            <h1>Why Book With Us?</h1>
            <ul>
                <li>150% money-back guarantee</li>
                <li>Real-time inventory</li>
                <li>Friendly customer service</li>
                <li>Secure payment</li>
                <li>Last minute bookings</li>
                <li>16 years online serving fans</li>
            </ul>
            <SiteButton buttonTheme="light" buttonBorder={false}>Learn More</SiteButton>
        </WhyBookWrapper>
    )
}
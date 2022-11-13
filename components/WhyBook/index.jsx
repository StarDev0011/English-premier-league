import { SiteButton } from "../../atoms/Main_button"
import { WhyBookWrapper } from "./styles"

export default function WhyBook() {
    return(
        <WhyBookWrapper>
            <h1>Why Book With Us?</h1>
            <ul>
                <li><img src = "/images/check.png" /><span>150% money-back guarantee</span></li>
                <li><img src = "/images/check.png" />Real-time inventory</li>
                <li><img src = "/images/check.png" />Friendly customer service</li>
                <li><img src = "/images/check.png" />Secure payment</li>
                <li><img src = "/images/check.png" />Last minute bookings</li>
                <li><img src = "/images/check.png" />16 years online serving fans</li>
            </ul>
            <SiteButton buttonTheme="light" buttonBorder={false}>Learn More</SiteButton>
        </WhyBookWrapper>
    )
}
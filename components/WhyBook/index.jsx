import Link from "next/link"
import { SiteButton } from "../../atoms/Main_button"
import { WhyBookWrapper } from "./styles"
import check_icon from "../../public/images/check.png"
import Image from "next/image"

export default function WhyBook() {
    return(
        <WhyBookWrapper>
            <h1 className="primary-text">Why Book With Us?</h1>
            <ul>
                <li><Image src={check_icon} alt = "Check" width = {20} height = {20} />150% money-back guarantee</li>
                <li><Image src={check_icon} alt = "Check" width = {20} height = {20} />Real-time inventory</li>
                <li><Image src={check_icon} alt = "Check" width = {20} height = {20} />Friendly customer service</li>
                <li><Image src={check_icon} alt = "Check" width = {20} height = {20} />Secure payment</li>
                <li><Image src={check_icon} alt = "Check" width = {20} height = {20} />Last minute bookings</li>
                <li><Image src={check_icon} alt = "Check" width = {20} height = {20} />16 years online serving fans</li>
            </ul>
            <SiteButton buttonTheme="light" buttonBorder={false}>
                <Link href="/">Learn More</Link>
            </SiteButton>
        </WhyBookWrapper>
    )
}
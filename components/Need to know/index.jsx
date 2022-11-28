import { NeedWrapper } from "./styles"
import check_icon from "../../public/images/check.png"
import Image from "next/image"

export default function NeedToKnow() {
    return(
        <NeedWrapper>
            <h1 className="primary-text">What you need to know...</h1>
            <ul>
                <li><Image src={check_icon} alt = "Check" width = {20} height = {20} /> Event times are subject to change - so please check with the venue for start times and/or age restrictions.</li>
                <li><Image src={check_icon} alt = "Check" width = {20} height = {20} /> Your total includes local sales tax and a service fee.</li>
                <li><Image src={check_icon} alt = "Check" width = {20} height = {20} /> Sales are final.</li>
                <li><Image src={check_icon} alt = "Check" width = {20} height = {20} /> No cancellations.</li>
            </ul>
        </NeedWrapper>
    )
}
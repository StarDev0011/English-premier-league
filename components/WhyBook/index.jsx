import Link from "next/link"
import {useState} from 'react'
import { WhyBookWrapper, ModalWrapper, ModalBody } from "./styles"
import check_icon from "../../public/images/check.png"
import Image from "next/image"

export default function WhyBook() {
    const [show, setShow] = useState(false)
    
    const ShowModal = (e) => {
        setShow(true)
    }
    const HideModal = (e) => {
        setShow(false)
    }

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
            <button className="primary_btn" onClick={ShowModal}>Learn More</button>
            {show ? (
                <ModalWrapper onClick={HideModal}>
                    <ModalBody>
                        <div className="close_modal"><p><span>×</span></p></div>
                        <h1>Why Book With Us?</h1>
                        <ul>
                            <li><Image src={check_icon} alt = "Check" width = {20} height = {20} />
                                150% money-back guarantee - In the highly unlikely case you do not receive the tickets you ordered
                                in time for the match, we will refund 100% of your money bacl, plus we will offer you a credit worth
                                50% of your original purchase towards another match.
                            </li>
                            <li><Image src={check_icon} alt = "Check" width = {20} height = {20} />
                                Real-time inventory - What you see on this website is what is available to purchase right now.
                            </li>
                            <li><Image src={check_icon} alt = "Check" width = {20} height = {20} />
                                Friendly customer service - We treat every customer with respect.
                            </li>
                            <li><Image src={check_icon} alt = "Check" width = {20} height = {20} />
                                Secure payment - Our website is completely secure and safe to purchase from. In fact we have the highest
                                level of security certificates (128 bit secure server) for our checkout process so your details remain
                                encrypted from being to end.
                            </li>
                            <li><Image src={check_icon} alt = "Check" width = {20} height = {20} />
                                Last minute bookings - We take bookings even during the match day*
                            </li>
                            <li><Image src={check_icon} alt = "Check" width = {20} height = {20} />
                                16 Years Online Serving Fans Like You - We have been online since 2006 serving football fans from all over the world.
                            </li>
                        </ul>
                        <p>* Subject to availability</p>
                    </ModalBody>
                </ModalWrapper>
            ):(<p></p>)}
        </WhyBookWrapper>
    )
}
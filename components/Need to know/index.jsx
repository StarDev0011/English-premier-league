import { NeedWrapper } from "./styles"

export default function NeedToKnow() {
    return(
        <NeedWrapper>
            <h1 className="primary-text">What you need to know...</h1>
            <ul>
                <li><img src = "/images/check.png" /> Event times are subject to change - so please check with the venue for start times and/or age restrictions.</li>
                <li><img src = "/images/check.png" /> Your total includes local sales tax and a service fee.</li>
                <li><img src = "/images/check.png" /> Sales are final.</li>
                <li><img src = "/images/check.png" />No cancellations.</li>
            </ul>
        </NeedWrapper>
    )
}
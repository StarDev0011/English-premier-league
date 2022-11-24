import { SubscribeWrapper, SubscribeBody } from "./styles"
import {useState} from 'react'

export default function Subscribe() {
    const [user_mail, setuser_mail] = useState("")
    const onChangeMail = (e) => {
        setuser_mail(e.target.value);
    }

    const Subscribe = (e) => {
        e.preventDefault();

        let postData = {
            email:user_mail,
        }
        console.log(postData)
    }
    return (
        <>
            <SubscribeWrapper>
                <SubscribeBody>
                    <h1>Get our ticket alert and be the first to know what&apos;s happening and when.</h1>
                    <form onSubmit = {Subscribe}>
                        <input type = "text" onChange = {onChangeMail} value = {user_mail} />
                        <input className="btn_subscribe" type = "submit" value = "Subscribe" />
                    </form>
                </SubscribeBody>
            </SubscribeWrapper>
        </>
    )
}
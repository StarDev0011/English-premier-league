import { SubscribeWrapper, SubscribeBody } from "./styles"
import {useState} from 'react'
import axios from "axios";

export default function Subscribe() {
    const [user_mail, setuser_mail] = useState("")
    const [notification, setNotification] = useState(false)
    const onChangeMail = (e) => {
        setuser_mail(e.target.value);
    }

    const Subscribe = (e) => {
        e.preventDefault();

        let postData = {
            email:user_mail,
        }
        axios.post("/api/subscribe", postData).then((res)=>{
            if(res.data == "Success") {
                setNotification(true)
            }
        })
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
                {notification?<p>Thanks, your email address successfully added!</p>:<p></p>}
            </SubscribeWrapper>
        </>
    )
}
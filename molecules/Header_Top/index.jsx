import Image from "next/image"
import {useState} from 'react'
import SearchBar from "../../components/SearchBar"
import Link from "next/link"
import vip_football_logo from "../../public/images/vip_football_logo.png"
import { HeaderTopWrapper, HeaderTopBody, LogoWrapper } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars  } from '@fortawesome/free-solid-svg-icons'

export default function HeaderTop() {
    const [show, setShow] = useState(false)
    const ShowNav = () => {
        setShow(!show)
    }
    return(
        <HeaderTopWrapper>
            <HeaderTopBody>
                <LogoWrapper>
                    <FontAwesomeIcon icon={faBars} onClick={ShowNav} />
                    <Link href="/">
                        <Image src={vip_football_logo} alt="Logo" width={250} />
                    </Link>
                </LogoWrapper>
                <SearchBar button_text="Search" />
            </HeaderTopBody>
            {show ? (
                <ul>
                    <li>Home</li>
                </ul>
            ) : (<p></p>)}
        </HeaderTopWrapper>
    )
}
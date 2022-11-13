import Image from "next/image"
import SearchBar from "../../components/SearchBar"
import Link from "next/link"
import vip_football_logo from "../../public/images/vip_football_logo.png"
import { HeaderTopWrapper, LogoWrapper } from "./styles"

export default function HeaderTop() {
    return(
        <HeaderTopWrapper>
            <LogoWrapper>
                <Link href="/">
                    <Image src={vip_football_logo} alt="Logo" width={250} />
                </Link>
            </LogoWrapper>
            <SearchBar />
        </HeaderTopWrapper>
    )
}
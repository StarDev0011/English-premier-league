import { BannerWrapper } from "./styles";
import banner from "../../public/images/banner.jpg"
import Image from "next/image";

export default function Banner() {
    return(
        <>
            <BannerWrapper>
                <Image src={banner} alt="Banner" />
            </BannerWrapper>
        </>
    )
}
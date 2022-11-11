import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { ListingWrapper } from "../../organizations/Listing/styles";
import Link from "next/link";
import { SiteButton } from "../../atoms/Main_button";

export default function Product() {
  const [list, setList] = useState([]);
  const router = useRouter();
  const url_prefix =
    "https://encompasscors.herokuapp.com/https://www.ticombo.com/prod/discovery/events/";
  const url_suffix =
    "/listings?page=1&limit=20&include=$total&populate=rel.user:firstName,displayName,urlPicture,trustedSeller,metadata%7Creservations:amount,expiresAt,price&sort=bestprice&sellerType=allSellers";

  const league_url = url_prefix + router.query.league + url_suffix;

  function getTestData() {
    axios.get(league_url).then((res) => {
      setList(res.data.payload);
      console.log(res.data.payload[0]);
      // console.log(res.data.payload[0].filters.team);
      // console.log(res.data.payload.results[0].inventory.startPrice);
      // console.log(res.data.payload.results[0].inventory.forSale);
      // console.log(res.data.payload.results[0].img);
    });
  }
  useEffect(() => {
    getTestData();
  }, []);
  return (
    <>
      <ListingWrapper className="league_listing">
        {list.map((item) => (
          <div className="league_item" key={item._id}>
            <div className="event-date">{item.price.sellingEur}</div>
          </div>
        ))}
      </ListingWrapper>
    </>
  );
}

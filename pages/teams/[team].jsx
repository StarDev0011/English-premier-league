import axios from "axios";
import { TeamWrapper, TeamBody } from "../../organizations/Listing/styles";
import Layout from "../../components/Layout";
import WhyBook from "../../components/WhyBook";
import Popular from "../../components/Leagues";
import Listing from "../../organizations/Listing";

export default function Team({team, list}) {
  
  return (
    <Layout>
      <TeamWrapper>
        <TeamBody>
          <div className="team_matches">
            <Listing title = {team} list = {list} />
          </div>
          <div className="team_sidebar">
            <WhyBook />
            <Popular />
          </div>
        </TeamBody>
      </TeamWrapper>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {

  const team = ctx.params.team
  const team_url = process.env.GET_TEAM_URI + team + "&page=1&limit=20";
  
  const response = await axios.get(team_url);
  
  return {
    props: {team, list: response.data.payload.results}, // will be passed to the page component as props
  }
}

import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Results() {
    const router = useRouter()
    return (
        <Layout>
            <h1>Search Results for {router.query.search}</h1>
        </Layout>
    )
}
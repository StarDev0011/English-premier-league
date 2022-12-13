import Layout from "../../components/Layout"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "../../components/CheckoutForm";

export default function Buy({id}) {
    return(
        <Layout>
            <h1>Buy {id}</h1>
            <CheckoutForm />
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const id = ctx.query.buy
    return {
      props: {id: id}, 
    }
  }
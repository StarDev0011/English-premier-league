import clientPromise from "../../lib/mongodb"

export default async function handler(req, res) {
    if(req.method == "POST") {
        const client = await clientPromise
        const db = client.db("all_users")
        const subscribe = await db.collection("Subscribers").insertMany([req.body]);
        res.status(200).send("Success")
    }
    else {
        res.status(200).json({ name: 'John Doe' })
    }
  }
  
// /api/new-meetup

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    const { message } = data

    console.log(data)

    // Connect to database
    // const client = await MongoClient.connect()
    // const db = client.db()

    res.status(201).json({ message: 'Meetup inserted' })
  }
}

export default handler
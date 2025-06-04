import { MongoClient } from 'mongodb'

async function handler (req, res) {
    if(method.req === 'POST'){
        const data = req.body;

        // const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://karisikdzemil:uQ3r3K9xQVPU90wZ@cluster0.pqvpxvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

        const db = client.db();

        const meetupsCollection = db.collection('sample_mflix');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' })
    }
}

export default handler
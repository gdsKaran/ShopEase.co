import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://gdskaran:lovemeloveme@cluster0.e0fzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let client;
let clientPromise;
if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db("Shophere");
  return db;
}

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server.js";
import { ObjectId } from "mongodb";

const url =
  "mongodb+srv://gdskaran:lovemeloveme@cluster0.e0fzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let cachedClient = null; // Cache the MongoDB client for reuse
let cachedDb = null; // Cache the database instance for reuse

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    // Reuse the cached client and database
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(url);
  await client.connect();
  const db = client.db("Shophere");

  // Cache the client and database for subsequent requests
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function GET(request) {
  try {
    const { db } = await connectToDatabase(); // Get a reusable connection
    const col = db.collection("Products");

    const query = {};
    const products = await col.find(query).toArray();

    return NextResponse.json({ success: true, result: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request) {
  const { id } = await request.json();
  const db = await connectToDatabase();
  const collection = db.collection("Products");
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }
  const product = await collection.findOne(
    { _id: new ObjectId(id) }
    // {
    //   projection: {
    //     name: 1,
    //     price: 1,
    //     brand: 1,
    //     image: 1,
    //     id: 1,
    //     pred_price: 1,
    //     items: 1,
    //   },
    // }
  );
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json({ product }, { status: 200 });
}

// import { MongoClient } from "mongodb";
// import { NextResponse } from "next/server.js";
// const url =
//   "mongodb+srv://gdskaran:lovemeloveme@cluster0.e0fzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// //Connect to your Atlas cluster
// const client = new MongoClient(url);

// export async function GET(request) {
//   try {
//     // Get the database and collection on which to run the operation
//     const db = client.db("Shophere");
//     const col = db.collection("Products");

//     const query = {};
//     const products = await col.find(query).toArray();
//     console.log(products);
//     return NextResponse.json({ result: products });
//   } finally {
//     await client.close();
//   }
// }

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server.js";

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

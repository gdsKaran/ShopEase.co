"use server";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";
import { connectToDatabase } from "@/db/connect";

export async function getProduct(id) {
  const db = await connectToDatabase();
  const collection = db.collection("Products");
  const product = await collection.findOne({ _id: new ObjectId(id) });

  // Convert `_id` to a string for React compatibility
  const serializedProduct = {
    ...product,
    _id: product._id.toString(),
  };

  if (!product) {
    notFound(); // Renders a 404 page
  }

  return serializedProduct;
}

export async function getProducts() {
  try {
    const db = await connectToDatabase();
    const col = db.collection("Products");

    const query = {};
    const products = await col.find(query).toArray();

    return products.map((item) => ({
      ...item,
      _id: item._id.toString(), // Convert ObjectId to string
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Unable to fetch products");
  }
}

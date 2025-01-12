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

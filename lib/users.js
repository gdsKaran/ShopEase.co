import { connectToDatabase2 } from "@/db/connect";

export async function createUser(email, password) {
  const db = await connectToDatabase2();
  const collection = db.collection("users");

  const result = await collection.insertOne({
    email,
    password,
  });
  return result;
}

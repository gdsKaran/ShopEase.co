import { notFound } from "next/navigation";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/db/connect";
import ProductDetail from "@/components/productDetailPage";

// export async function generateMetadata({ params }) {
//   const { id } = params;

//   if (!ObjectId.isValid(id)) {
//     return { title: "Invalid Product" };
//   }

//   const db = await connectToDatabase();
//   const collection = db.collection("Products");
//   const product = await collection.findOne({ _id: new ObjectId(id) });

//   if (!product) {
//     return { title: "Product Not Found" };
//   }

//   return { title: product.name };
// }

const ProductInfo = async ({ params }) => {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    notFound(); // Renders a 404 page
  }

  const db = await connectToDatabase();
  const collection = db.collection("Products");
  const product = await collection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    notFound(); // Renders a 404 page
  }

  return <ProductDetail product={product} />;
};

export default ProductInfo;

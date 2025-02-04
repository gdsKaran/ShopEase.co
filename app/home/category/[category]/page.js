import ProductCategoryPage from "@/components/Product/productCategoryPage";
import { connectToDatabase } from "@/db/connect";
import { notFound } from "next/navigation";

export default async function ProductCategory({ params }) {
  const { category } = params;

  try {
    // Connect to the database
    const db = await connectToDatabase();
    const collection = db.collection("Products");

    // Query for products matching the category
    const products = await collection
      .find({ searchFilter: category })
      .toArray();

    // Handle no products found
    if (!products || products.length === 0) {
      notFound(); // Render a 404 page
    }

    // Render the product category page
    return <ProductCategoryPage products={products} />;
  } catch (error) {
    console.error("Error fetching products:", error);
    notFound(); // Fallback to 404 if there's an error
  }
}

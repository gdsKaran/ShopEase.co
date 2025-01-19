import { getProducts } from "@/actions/products";
import SummerCollectionPage from "@/components/Product/summerCollectionPage";

export default async function SummerCollection() {
  const product = await getProducts();

  return <SummerCollectionPage products={product} />;
}

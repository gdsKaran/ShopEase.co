import { getProducts } from "@/actions/products";
import SearchPageComp from "@/components/header/searchPageComp";

export default async function SearchPage() {
  const products = await getProducts();
  return <SearchPageComp products={products} />;
}

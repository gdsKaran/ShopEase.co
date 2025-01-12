import { notFound } from "next/navigation";
import { ObjectId } from "mongodb";

import ProductDetail from "@/components/Product/productDetailPage";
import { verifyAuth } from "@/lib/auth";
import { getProduct } from "@/actions/products";

const ProductInfo = async ({ params }) => {
  const { id } = params;
  const result = await verifyAuth();

  if (!ObjectId.isValid(id)) {
    notFound(); // Renders a 404 page
  }
  const product = await getProduct(id);
  if (result.user !== null) {
    const userId = result.user.id;

    return <ProductDetail product={product} id={id} userId={userId} />;
  }

  return <ProductDetail product={product} userId={null} />;
};

export default ProductInfo;

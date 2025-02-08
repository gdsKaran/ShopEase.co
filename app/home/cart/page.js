import { getCartData } from "@/actions/cart";
//import Cart from "@/components/cart";
import Cartt from "@/components/cartt";
import { verifyAuth } from "@/lib/auth";

export default async function CartPage() {
  const result = await verifyAuth();

  if (result.user !== null) {
    const userId = result.user.id;
    const cartData = await getCartData(userId);

    return <Cartt cartData={cartData} userId={userId} />;
  }
  return <Cartt cartData={[]} />;
}

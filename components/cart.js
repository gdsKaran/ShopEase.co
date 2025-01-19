"use client";
import { placeOrder, removeProductFromCart } from "@/actions/cart";
import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cart({ cartData, userId }) {
  const router = useRouter();
  const [cartItems, setCartItems] = useState(cartData);

  useEffect(() => {
    setCartItems(cartData); // Update cartItems when cartData prop changes
  }, [cartData]);

  const handleRemoveItem = async (userId, productId) => {
    await removeProductFromCart(userId, productId);

    setCartItems((prevCartItems) =>
      prevCartItems.filter((product) => product._id !== productId)
    );
  };

  const totalPrice = cartItems
    .reduce((total, product) => total + product.quantity * product.price, 0)
    .toFixed(2);

  async function order(e, userId) {
    e.preventDefault();
    const result = await placeOrder(userId);
    if (result.success) {
      router.push("/home");
    }
  }
  return (
    <div className="bg-white min-h-screen ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {cartItems.length === 0 && "Your Cart is Empty"}{" "}
          {cartItems.length > 0 && "Shopping Cart"}
        </h1>

        {cartItems.length > 0 && (
          <form className="mt-12">
            <section aria-labelledby="cart-heading">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {cartItems.map((product) => (
                  <li key={product._id} className="flex py-6">
                    <div className="shrink-0">
                      <img
                        alt={product.imageAlt}
                        src={product.images[0]}
                        className="size-24 rounded-md object-cover sm:size-32"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-sm">
                            <a
                              href={`/home/products/${product._id}`}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.name}
                            </a>
                          </h4>
                          <p className="ml-4 text-sm font-medium text-gray-900">
                            ${product.price}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.quantity}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-1 items-end justify-between">
                        <p className="flex items-center space-x-2 text-sm text-gray-700">
                          {product.inStock ? (
                            <CheckIcon
                              aria-hidden="true"
                              className="size-5 shrink-0 text-green-500"
                            />
                          ) : (
                            <ClockIcon
                              aria-hidden="true"
                              className="size-5 shrink-0 text-gray-300"
                            />
                          )}

                          <span>Will ship in 3 - 4 Days</span>
                        </p>
                        <div className="ml-4">
                          <button
                            onClick={() =>
                              handleRemoveItem(product.userId, product._id)
                            }
                            type="button"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section aria-labelledby="summary-heading" className="mt-10">
              <h2 id="summary-heading" className="sr-only">
                Order summary
              </h2>

              <div>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Subtotal
                    </dt>
                    <dd className="ml-4 text-base font-medium text-gray-900">
                      ${totalPrice}
                    </dd>
                  </div>
                </dl>
                <p className="mt-1 text-sm text-gray-500">
                  Shipping and taxes will be calculated at checkout.
                </p>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  onClick={(e) => order(e, userId)}
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Order Now
                </button>
              </div>

              <div className="mt-6 text-center text-sm">
                <p>
                  or{" "}
                  <a
                    href="/home"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </p>
              </div>
            </section>
          </form>
        )}
      </div>
    </div>
  );
}

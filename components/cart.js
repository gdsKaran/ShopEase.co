"use client";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import ProductPurchased from "./alerts/productPurchased";
import { useEffect, useState } from "react";
import { placeOrder, removeProductFromCart } from "@/actions/cart";

export default function Cart({ cartData, userId }) {
  const [cartItems, setCartItems] = useState(cartData);
  const [ordered, setOrder] = useState(false);

  useEffect(() => {
    setCartItems(cartData); // Update cartItems when cartData prop changes
  }, [cartData]);

  const handleRemoveItem = async (userId, productId) => {
    await removeProductFromCart(userId, productId);
    setCartItems((prevItems) =>
      prevItems.filter((product) => product._id !== productId)
    );
  };

  // Update product quantity in the state
  const updateProductQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((product) =>
        product._id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const shippingCost = 5.0;
  const tax = 1.32;

  // Recalculate summary values from cartItems state
  const SubTotal = cartItems
    .reduce((total, product) => total + product.quantity * product.price, 0)
    .toFixed(2);
  const totalTax = cartItems
    .reduce((total, product) => total + product.quantity * tax, 0)
    .toFixed(2);
  const totalPriceAfterTax = (
    parseFloat(SubTotal) +
    parseFloat(totalTax) +
    shippingCost
  ).toFixed(2);

  async function order(e, userId) {
    e.preventDefault();
    const result = await placeOrder(userId);
    if (result.success) {
      setOrder(true);
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {cartItems.length === 0 && "Your Cart is Empty"}{" "}
          {cartItems.length > 0 && "Shopping Cart"}
        </h1>
        {ordered && <ProductPurchased />}
        {cartItems.length > 0 && (
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="">
                Items in your shopping cart
              </h2>
              <ul
                role="list"
                className="divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {cartItems.map((product) => {
                  const currentQuantity = Number(product.quantity) || 1;
                  const maxSelectable =
                    currentQuantity < 10 ? 10 : currentQuantity;

                  return (
                    <li key={product._id} className="flex py-6 sm:py-10">
                      <div className="shrink-0">
                        <Image
                          width={0}
                          height={0}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          alt={product.imageAlt}
                          src={product.images[0]}
                          className="size-24 rounded-md object-cover sm:size-48"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <a
                                  href={`/home/products/${product._id}`}
                                  className="font-medium text-gray-700 hover:text-gray-800"
                                >
                                  {product.name}
                                </a>
                              </h3>
                            </div>
                            <div className="mt-1 flex text-sm">
                              <p className="text-gray-500">{product.color}</p>
                              {product.quantity && (
                                <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                                  {product.quantity}
                                </p>
                              )}
                            </div>
                            <p className="mt-1 text-sm font-medium text-gray-900">
                              $ {product.price}
                            </p>
                          </div>

                          <div className="mt-4 sm:mt-0 sm:pr-9">
                            <div className="grid w-full max-w-16 grid-cols-1 relative">
                              <select
                                name={`quantity-${product._id}`}
                                aria-label={`Quantity, ${product.name}`}
                                value={currentQuantity}
                                onChange={(e) =>
                                  updateProductQuantity(
                                    product._id,
                                    Number(e.target.value)
                                  )
                                }
                                className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                              >
                                {Array.from(
                                  { length: maxSelectable },
                                  (_, i) => (
                                    <option key={i} value={i + 1}>
                                      {i + 1}
                                    </option>
                                  )
                                )}
                              </select>
                              <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                              />
                            </div>

                            <div className="absolute right-0 top-0">
                              <button
                                onClick={() =>
                                  handleRemoveItem(product.userId, product._id)
                                }
                                type="button"
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                <span className="sr-only">Remove</span>
                                <XMarkIcon
                                  aria-hidden="true"
                                  className="size-5"
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        <p className="mt-4 flex space-x-2 text-sm text-gray-700">
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
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Order Summary Section */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>
              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ${SubTotal}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                    <a
                      href="#"
                      className="ml-2 shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how shipping is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        aria-hidden="true"
                        className="size-5"
                      />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ${shippingCost}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                    <a
                      href="#"
                      className="ml-2 shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how tax is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        aria-hidden="true"
                        className="size-5"
                      />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ${totalTax}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ${totalPriceAfterTax}
                  </dd>
                </div>
              </dl>
              <div className="mt-6">
                <button
                  type="submit"
                  onClick={(e) => order(e, userId)}
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Order Now
                </button>
              </div>
            </section>
          </form>
        )}
      </div>
    </div>
  );
}

"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPageComp({ products }) {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const query = searchParams.get("query") || "";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length) {
      setLoading(true);
      setFilteredProducts(
        products.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        )
      );
      setLoading(false);
    }
  }, [query, products]);

  return (
    <>
      <div className="bg-white  min-h-screen">
        {loading ? (
          <div className="flex justify-center items-center min-h-[40vh] pt-16">
            <span className="loading loading-bars loading-md"></span>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {filteredProducts.map((product) => (
                <a
                  key={product._id}
                  href={`/home/products/${product._id}`}
                  className="group"
                >
                  <img
                    alt={product.name}
                    src={product.images[0]}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                  />
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.price}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white min-h-[50vh] flex items-center justify-center">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="text-3xl font-semibold text-gray-750">
                We couldn't find any matches!
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

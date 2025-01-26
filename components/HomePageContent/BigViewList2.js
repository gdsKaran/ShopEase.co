import Image from "next/image";

export default function BigViewList2({ products }) {
  const sweaters = products.filter((s) => s.category === "Pants").slice(1, 4);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Classic Men&apos;s Pants
          </h2>
          <a
            href="http://localhost:3000/home/category/Pants"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {sweaters.map((product) => (
            <div key={product._id} className="group relative">
              <Image
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 33vw"
                alt={product.imageAlt}
                src={product.images[0]}
                className="h-96 w-full rounded-lg object-cover group-hover:opacity-75 sm:aspect-[2/3] sm:h-auto"
              />
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <a href="http://localhost:3000/home/category/Pants">
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="http://localhost:3000/home/category/Pants"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

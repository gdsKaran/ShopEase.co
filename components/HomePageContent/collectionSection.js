import Image from "next/image";

const callouts = [
  {
    name: "Walk With Style",
    description: "Premium Hats",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682535209719-839f625f8770?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF0c3xlbnwwfHwwfHx8MA%3D%3D",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "home/category/Hats",
  },
  {
    name: "Travel Essentials",
    description: "Sunny Day commute essentials",
    imageSrc:
      "https://image.hm.com/assets/hm/4e/68/4e682fdf094ebbf1d81d9fe8d12dc31b7064ea19.jpg?imwidth=1260",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "/category/Sunglasses",
  },
  {
    name: "Watches",
    description: "Premium Watches",
    imageSrc:
      "https://static.helioswatchstore.com/media/easyslide/Herbelin_1.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "/category/Watches",
  },
];

export default function CollectionSec() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

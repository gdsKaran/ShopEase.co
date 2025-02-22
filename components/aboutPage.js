"use client";

import Image from "next/image";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useRouter } from "next/navigation";

const faqs = [
  {
    question: "What's makes us different from others?",
    answer: `Genuine products at genuine prices with a great customer satisfaction rate. 
    We ensure a seamless shopping experience with secure payments and fast delivery.
    Our wide range of products is carefully curated for quality and affordability.
    Dedicated customer support is always available to assist you.
    Shop with confidence and enjoy hassle-free returns!
    With exclusive deals and exciting discounts,
    we make shopping more rewarding.
    Experience the difference with our user-friendly interface and personalized recommendations!`,
  },
  {
    question: "Getting problems on return or refund?",
    answer:
      "Worry not, our team will resolve the problem as fast as can and will reach you as quickly. If your concern is regarding a return or refund, rest assured that we will review your request promptly. Our team ensures a smooth process, keeping you updated at every step. Please provide the necessary details so we can assist you efficiently",
  },
  {
    question: "Want to know where your order is?",
    answer:
      "To track your order, simply enter the order number below to get real-time updates on its status and location. We’ll keep you informed every step of the way. You will receive notifications whenever there is an update on your delivery, ensuring you never miss any important details. If you have any questions along the way, our support team is just a click away to assist you further.",
  },
  {
    question: "Card payment?",
    answer:
      "We accept cards with Mastercard, Visa, or Rupay symbols. EMI options are also available for selected cards, making your payments more flexible. Feel free to choose the payment method that best suits your convenience.",
  },
  {
    question: "Pay on delivery?",
    answer:
      "Pay for the items when your parcel is delivered. Please note you must be logged in to your registered account to choose this payment method. Guest accounts will not allow Pay on Delivery.",
  },
  {
    question: "UPI?",
    answer:
      "ShopEase guarantees that your details are completely safe with us. All information is sent encrypted to ensure total security of any sensitive information.",
  },
  {
    question: "Can i cancel my order?",
    answer: `We start processing your order quickly which means we can’t make any changes once it’s confirmed. This includes changing the delivery address or delivery option. 

However, you may be able to cancel your order and place a new one instead as we have a short grace period after the order is confirmed. 

Sign in to My Account and view your online orders under My Purchases. If the ‘Cancel Order’ button is visible, you can select this option and your order will be cancelled. If the button is not visible, it is too late to cancel your order as processing has begun. Should you need to, you can find out about return options instead here.`,
  },
];
const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Automation", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Submit ticket", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
};

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Navigate to the new page
    router.push("/home");
  };

  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-1 sm:pb-20">
          <Image
            height={0}
            width={0}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt=""
            src="https://img.freepik.com/free-photo/colourful-packets-decorated-leaves_23-2147955455.jpg?t=st=1736594787~exp=1736598387~hmac=ba8aff94b679ee22a5c1f7b1ef77a04b9ea4bffd2d4fd5610c44cc85d4c58842&w=996"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                  ShopEase, Where Your Wishlist Comes to Life!
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                  Redefining convenience, one click at a time. Discover, shop,
                  and smile! Your favorite products, just a tap away. Shop
                  smarter, live better with ShopEase!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button
                    onClick={handleClick}
                    disabled={isLoading}
                    className="rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 inline mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25 stroke-white"
                            cx="12"
                            cy="12"
                            r="10"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75 fill-white"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Entering...
                      </>
                    ) : (
                      "Enter the new World!"
                    )}
                  </button>
                  {/* <a href="#" className="text-sm/6 font-semibold text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </a> */}
                </div>
              </div>
            </div>

            {/* Logo cloud */}
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <Image
                alt="Zara"
                src="https://1000logos.net/wp-content/uploads/2017/05/Zara-Symbol.jpg"
                width={158}
                height={48}
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <Image
                alt="H&M"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <Image
                alt="Prada"
                src="https://media.designrush.com/inspirations/129357/conversions/_1513769276_486_Prada-Logo-preview.jpg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <Image
                alt="Addidas"
                src="https://i.pinimg.com/736x/6d/57/f6/6d57f6d7de64f61911cae8a6b48671ee.jpg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              />
              <Image
                alt="Louis Vuitton"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxoZ3QyKAojl6CTjbFnTVtNPiCXS-vA1iJA&s"
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq, index) => (
                <Disclosure
                  key={faq.question}
                  as="div"
                  className="pt-6 "
                  open={openIndex === index ? true : false}
                >
                  <dt>
                    <DisclosureButton
                      className="group flex w-full items-start justify-between text-left text-gray-900"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      <span className="text-base/7 font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-data-[open]:hidden"
                        />
                        <MinusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-[&:not([data-open])]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <Transition
                    enter="transition-[max-height] duration-700 ease-out"
                    enterFrom="max-h-0 overflow-hidden"
                    enterTo="max-h-40 overflow-hidden"
                    leave="transition-[max-height] duration-300 ease-in"
                    leaveFrom="max-h-40 overflow-hidden"
                    leaveTo="max-h-0 overflow-hidden"
                  >
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base/7 text-gray-600">{faq.answer}</p>
                    </DisclosurePanel>
                  </Transition>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-32 bg-gray-900 sm:mt-56">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <span className="text-4xl font-extrabold bg-clip-text text-transparent tracking-tight">
              <span className="text-white">shop</span>
              <span className="text-teal-400">Ease</span>
            </span>

            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-400 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-white">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-400 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-400 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-400 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

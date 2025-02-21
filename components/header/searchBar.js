"use client";

import { useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState();
  const router = useRouter();
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (query) {
      router.push(`/home/Search?query=${encodeURIComponent(query)}`);
    }
  };

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
      <form onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}>
        <div className="flex items-center  " onClick={handleClick}>
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 ml-3" />
          <input
            ref={inputRef}
            type="text"
            name="search"
            placeholder="Search..."
            onChange={handleChange}
            value={query}
            className="w-full sm:w-auto flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
}

"use client";

import React from "react";

interface Search {
  placeholder: string;
}
const SearchBar = (props: Search) => {
  return (
    <div className="flex justify-center mt-16">
      <div className="relative w-80 flex">
        <input
          type="text"
          placeholder={props.placeholder}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className=" text-slate-300 dark:text-slate-400 absolute m-1.5"
          aria-hidden="true"
        >
          <path d="m19 19-3.5-3.5"></path>
          <circle cx="11" cy="11" r="6"></circle>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;

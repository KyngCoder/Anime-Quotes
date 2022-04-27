import React, { useState } from "react";
import Main from "./Main";

function SearchBar() {
  const [category, setCategory] = useState("anime name");
  const [searchTerm, setSearchTerm] = useState("naruto");

  const submit = (event) => {
    event.preventDefault();
    setSearchTerm('')
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="flex">
          <div className="rounded shadow w-44 dark:bg-blue-700">
            <div className="flex  items-center h-full">
              <select
              value={category}
              onChange={(event => setCategory(event.target.value))}
               className="cursor-pointer  text-center w-full ring-opacity-0 outline-none bg-inherit text-white px-2 ">
                <option className="bg-gray-600" value="anime-name">
                  Anime Name
                </option>
                <option className="bg-gray-600" value="character">
                  Character
                </option>
                <option className="bg-gray-600" value="random">
                  Random
                </option>
              </select>
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="p-2.5 w-full z-20 text-sm text-blue-900 bg-blue-50 rounded-r-lg border-l-blue-50 border-l-2 border border-focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-700 dark:border-l-blue-700  dark:border-blue-600 dark:placeholder-white dark:text-white dark:focus:border-blue-700"
              placeholder="Search Anime, Character, Random"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
      <Main category={category} searchTerm={searchTerm} />
    </>
  );
}

export default SearchBar;

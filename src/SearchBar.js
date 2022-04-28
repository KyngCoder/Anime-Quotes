import React, { useState } from "react";
import Main from "./Main";

function SearchBar() {
  const [category, setCategory] = useState("anime name");
  const [searchTerm, setSearchTerm] = useState("naruto");

  const submit = (event) => {
    event.preventDefault();
    setSearchTerm("");
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="relative w-full">
          <div className="flex">
            <div className="rounded m-1 w-44 dark:bg-blue-700">
              <div className="flex p-2  items-center h-full">
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="cursor-pointer  text-center w-full ring-opacity-0 outline-none bg-inherit text-white px-2 "
                >
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
            <input
              type="search"
              id="search-dropdown"
              className="w-full bg-blue-700 mt-1 mb-1 p-2 text-white border-2 border-transparent hover:outline-none focus:outline-none mr-2 rounded-md"
              placeholder="Search Anime, Character, Random"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button
              type="submit"
              className="absolute top-1.5 right-3 p-2.5 text-sm font-medium text-white hover:bg-blue-900 hover:outline-none focus:outline-none"
            >
              <svg
                className="w-5 h-5 "
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

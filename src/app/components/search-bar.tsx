import React from "react";

interface Search {
  placeholder: string;
  sendSearchBarInfo: (data: string) => void;
}

const SearchBar = (props: Search) => {
  // Searched data to be sent to the page
  const [data, setData] = React.useState("");

  // When the input is updated the data is updated too
  const handleChange = ({ target }: any) => {
    setData(target.value);
  };

  // When the button is pressed, the data is sent to the page
  const handleClick = () => {
    props.sendSearchBarInfo(data);
  };

  // When the key enter is pressed in the input, the data is sent to the page
  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      props.sendSearchBarInfo(data);
    }
  };

  return (
    <div className="flex justify-center mt-16">
      <div className="w-80 relative">
        <input
          type="text"
          placeholder={props.placeholder}
          className="placeholder-italic placeholder-text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <button
          className="absolute top-0 right-0 h-full p-1 bg-inherit rounded-md"
          onClick={handleClick}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-300 dark:text-slate-400"
            aria-hidden="true"
          >
            <path d="M19 19L15.5 15.5"></path>
            <circle cx="11" cy="11" r="6"></circle>
          </svg>
        </button>
      </div>
      {}
    </div>
  );
};

export default SearchBar;

import React from "react";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [type, TypeDropdown] = useDropdown("Type", "Any", types);

  return (
    <div>
      <h1>I chose you!</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          alert("Catching them all!");
        }}
      >
        <label htmlFor="type">Type</label>
        <TypeDropdown />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchParams;

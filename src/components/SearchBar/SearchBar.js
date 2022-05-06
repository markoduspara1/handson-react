import { React, useState } from "react";
import { Search, SearchInput } from "./SearchBarStyle";
import CoursesMock from "../../lib/mock/courses";

const SearchBar = () => {
  const [searchTerm, setSearchterm] = useState("");

  return (
    <Search>
      {CoursesMock.filter(val => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div>
            <p>{val.title}</p>
          </div>
        );
      })}
      <SearchInput
        placeholder="Search Courses"
        onChange={e => setSearchterm(e.target.value)}
      ></SearchInput>
    </Search>
  );
};

export default SearchBar;

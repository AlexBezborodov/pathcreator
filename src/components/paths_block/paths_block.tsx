import React, { FC, useEffect, useState } from "react";

import { mockData } from "../../constants";
import { SearchBar } from "../search_bar";
import { PathList } from "./paths_list/path_list";

import "./paths_block.scss";

export const PathsBlock: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(mockData);

  const filterData = () => {
    if (searchQuery.length) {
      const filteredArr = mockData.filter((item) =>
        item.title.includes(searchQuery),
      );
      setFilteredData(filteredArr);
    } else {
      setFilteredData(mockData);
    }
  };

  useEffect(() => {
    filterData();
  }, [searchQuery]);

  return (
    <div className="paths-wrapper">
      <SearchBar setSearchQuery={setSearchQuery} />
      <PathList listData={filteredData} />
    </div>
  );
};

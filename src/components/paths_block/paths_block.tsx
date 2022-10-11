import React, { FC, useEffect, useState } from "react";

import { mockData } from "../../constants";
import { SearchBar } from "../search_bar";
import { PathList } from "./paths_list/path_list";
import pathsStore from "../../store/paths";

import "./paths_block.scss";
import { observer } from "mobx-react-lite";

export const PathsBlock: FC = observer(() => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="paths-wrapper">
      <SearchBar setSearchQuery={setSearchQuery} />
      <PathList listData={pathsStore.searchData(searchQuery)} />
    </div>
  );
});

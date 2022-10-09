import React, { FC, ChangeEvent } from "react";

import { Input } from "antd";
import "./search.scss";

export const SearchBar: FC<any> = ({ setSearchQuery }: any) => {
  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-wrapper">
      <Input placeholder="Search" onChange={onSearch} />
    </div>
  );
};

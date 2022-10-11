import React, { FC } from "react";

import { List } from "antd";

import { DataPath } from "../../../interfaces";
import { PathsItem } from "../paths_item";

import "../paths_block.scss";

export const PathList: FC<any> = ({ listData }) => {
  return (
    <div className="list-wrapper">
      <List
        itemLayout="horizontal"
        dataSource={listData}
        renderItem={(item: DataPath, index: number) => (
          <PathsItem key={index} {...item} />
        )}
      />
    </div>
  );
};

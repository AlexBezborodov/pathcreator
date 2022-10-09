import React, { FC } from "react";

import { List } from "antd";

import { PathsItem } from "../paths_item";

import "../paths_block.scss";

export interface Props {
  id: number;
  title: string;
  subtitle: string;
  result: string;
  isFavourite: Boolean;
}

export const PathList: FC<any> = ({ listData }) => {
  return (
    <div className="list-wrapper">
      <List
        itemLayout="horizontal"
        dataSource={listData}
        renderItem={(item: Props, index: number) => (
          <PathsItem key={index} {...item} />
        )}
      />
    </div>
  );
};

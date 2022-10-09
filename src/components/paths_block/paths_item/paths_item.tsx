import React from "react";

import { StarTwoTone, RightOutlined } from "@ant-design/icons";
import { List, Avatar, Space } from "antd";

import { LOGO } from "../../../constants";
import { Props } from "../paths_list";

import "../paths_block.scss";

export const PathsItem = (
  { title, subtitle, result, isFavourite }: Props,
  key: number,
) => {
  const modifiedSubtitle =
    subtitle.length > 100 ? `${subtitle.slice(0, 50)}...` : subtitle;
  return (
    <List.Item key={key}>
      <List.Item.Meta
        avatar={<Avatar src={LOGO} />}
        title={
          <div>
            {isFavourite && (
              <Space size="middle">
                <StarTwoTone
                  twoToneColor="#1890ff"
                  style={{ fontSize: "20px", marginRight: "10px" }}
                />
              </Space>
            )}
            <span style={{ fontSize: "20px" }}>{title}</span>
          </div>
        }
        description={modifiedSubtitle}
      />
      <span style={{ fontSize: "32px" }}>{result}</span>
      <RightOutlined style={{ fontSize: "20px", margin: "0 10px" }} />
    </List.Item>
  );
};

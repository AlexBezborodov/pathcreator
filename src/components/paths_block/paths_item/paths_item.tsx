import React from "react";

import { StarTwoTone, RightOutlined } from "@ant-design/icons";
import { List, Avatar, Space } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import { LOGO } from "../../../constants";
import { Props } from "../paths_list";

import "../paths_block.scss";

export const PathsItem = (
  { id, title, subtitle, result, isFavourite }: Props,
  key: number,
) => {
  const navigate = useNavigate();
  const { pathId } = useParams();
  const modifiedSubtitle =
    subtitle.length > 100 ? `${subtitle.slice(0, 50)}...` : subtitle;

  const onNavigate = () => {
    navigate(`/path/${id}`);
  };

  return (
    <List.Item
      key={key}
      onClick={onNavigate}
      className={`${Number(pathId) === id ? "list-active" : ""}`}
    >
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

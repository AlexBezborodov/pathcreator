import React from "react";

import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import { Map } from "../map";
import "./path_details.scss";
export const PathDetails = () => {
  const navigate = useNavigate();
  const onClose = () => navigate("/");
  return (
    <div className="details">
      <Button
        shape="circle"
        icon={<CloseOutlined />}
        className="abslute-btn"
        onClick={onClose}
      />
      <div className="details-header">
        <h2>PathTitle</h2>
        <span>1.74km</span>
      </div>
      <div className="full-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Map />
      <div className="footer-actions">
        <Button type="link">Add to fav</Button>
        <Button type="link" danger>
          Remove
        </Button>
      </div>
    </div>
  );
};

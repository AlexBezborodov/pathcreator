import React, { FC } from "react";

import { Row, Col } from "antd";
import { useMatch } from "react-router-dom";
import "./layout.scss";

import { PathDetails } from "../path_details";
import { PathsBlock } from "../paths_block";

export const Layout: FC = () => {
  const match = useMatch("/");
  return (
    <>
      <Row justify="center">
        <Col className="col" xs={24} md={24} lg={12}>
          <div className="layout-wrapper">
            <PathsBlock />
          </div>
        </Col>
        <Col xs={24} md={24} lg={12} className="col">
          {!match && (
            <div className="layout-wrapper">
              <PathDetails />
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

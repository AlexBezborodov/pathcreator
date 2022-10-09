import React, { FC, ReactNode } from "react";

import { Row, Col } from "antd";

import "./layout.scss";
import { Map } from "../map";
import { PathsBlock } from "../paths_block";

export const Layout: FC = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <Col className="col" xs={24} md={24} lg={12}>
          <PathsBlock />
        </Col>
        <Col xs={24} md={24} lg={12} className="col">
          <Map />
        </Col>
      </Row>
    </>
  );
};

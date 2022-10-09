import React, { FC, useState } from "react";

import { PageHeader, Button } from "antd";

import "./header.scss";
import { LOGO } from "../../constants";
import { AddPath } from "../addPath";

export const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const props = { isModalOpen, setIsModalOpen };
  return (
    <>
      <PageHeader
        className="site-page-header"
        avatar={{ src: LOGO }}
        title="Saunter"
        extra={[
          <Button key="1" type="primary" onClick={() => setIsModalOpen(true)}>
            Add path
          </Button>,
        ]}
      />
      <AddPath {...props} />
    </>
  );
};

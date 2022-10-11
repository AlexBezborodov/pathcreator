import React, { Dispatch, FC, SetStateAction, useState } from "react";

import { FundOutlined } from "@ant-design/icons";
import { Modal, Input, Row, Col, Button } from "antd";

import { Map } from "../map";

const { TextArea } = Input;

interface AddPathProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
interface NewPath {
  title?: string;
  shortDescription?: string;
  fullDescription?: string;
}

export const AddPath: FC<any> = ({
  isModalOpen,
  setIsModalOpen,
}: AddPathProps) => {
  const [data, setData] = useState<NewPath>({});
  const onHandleChange = (event: any) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setData({});
  };

  return (
    <>
      <Modal
        title="Add new path"
        open={isModalOpen}
        onCancel={handleCancel}
        width="90vw"
        style={{ maxWidth: "1200px" }}
        footer={null}
      >
        <Row justify="center">
          <Col className="col revert-col" xs={24} md={24} lg={12}>
            <Input
              placeholder="Title"
              name="title"
              value={data?.title || ""}
              onChange={onHandleChange}
            />
            <div style={{ margin: "24px 0" }} />
            <TextArea
              showCount
              maxLength={100}
              placeholder="Short description"
              autoSize={{ minRows: 5, maxRows: 5 }}
              name="shortDescription"
              onChange={onHandleChange}
              value={data?.shortDescription || ""}
            />
            <div style={{ margin: "24px 0" }} />
            <TextArea
              placeholder="Controlled autosize"
              autoSize={{ minRows: 7, maxRows: 7 }}
              name="fullDescription"
              value={data?.fullDescription || ""}
              onChange={onHandleChange}
            />
            <p style={{ textAlign: "center", margin: "1.5rem 0" }}>
              <FundOutlined style={{ fontSize: "20px", marginRight: "10px" }} />{" "}
              Total length 1.19km
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="primary" size="large">
                Add path
              </Button>
            </div>
          </Col>
          <Col className="revert-col" xs={24} md={24} lg={12}>
            <Map maxHeight="520px" />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

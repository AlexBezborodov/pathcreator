import React, { FC, useState } from "react";

import { FundOutlined } from "@ant-design/icons";
import { Modal, Input, Row, Col, Button } from "antd";

import { AddPathProps, DataPath } from "../../interfaces";
import { Map } from "../map";
import { observer } from "mobx-react-lite";
import pathsStore from "../../store/paths";

const { TextArea } = Input;

export const AddPath: FC<any> = observer(({
  isModalOpen,
  setIsModalOpen,
}: AddPathProps) => {
  const [data, setData] = useState<DataPath | any>({});
  const onHandleChange = (event: any) => {
    setData((prev: Object) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setData({});
  };

  const onAddPath = () => {
    const newPath = {
      id: Math.floor(Math.random() * 10000) + 1,
      ...data,
      isFavourite: false,
      result: 4.4,
      coords: [
        { lat: 49.44539, lng: 32.061158 },
        { lat: 49.44539, lng: 32.061158 },
      ],
    }
    pathsStore.addPath(newPath);
    handleCancel();
  }

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
              Total length 4.4km
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="primary" size="large" onClick={onAddPath} disabled={!data.title || !data.shortDescription || !data.fullDescription}>
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
});

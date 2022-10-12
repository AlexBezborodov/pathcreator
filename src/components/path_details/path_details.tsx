import React from "react";

import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";

import pathsStore from "../../store/paths";
import { Map } from "../map";

import "./path_details.scss";

export const PathDetails = observer(() => {
  const { pathId } = useParams();
  const navigate = useNavigate();

  const onClose = () => navigate("/");

  const onRemove = () => {
    pathsStore.removePath(Number(pathId));
    onClose();
  };

  const details = pathsStore.getDetailedPathInfo(Number(pathId));

  return (
    <div className="details">
      <Button
        shape="circle"
        icon={<CloseOutlined />}
        className="abslute-btn"
        onClick={onClose}
      />
      <div className="details-header">
        <h2>{details?.title}</h2>
        <span>{details?.result}km</span>
      </div>
      <div className="full-description">
        <p>{details?.fullDescription}</p>
      </div>
      <Map markers={details?.markers} />
      <div className="footer-actions">
        <Button
          type="link"
          onClick={() => pathsStore.addToFavourites(Number(pathId))}
        >
          {details?.isFavourite ? "Remove from fav" : "Add to fav"}
        </Button>
        <Button type="link" onClick={onRemove} danger>
          Remove
        </Button>
      </div>
    </div>
  );
});

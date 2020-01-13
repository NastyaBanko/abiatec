import React from "react";
import { Button } from "antd";

import StatusSelect from "../../../containers/StatusSelect";
import CategorySelect from "../../../containers/CategorySelect";
import AgeSelect from "../../../containers/AgeSelect";
import ResetSettings from "../../../containers/ResetSettings";
import SortAlphabetically from "../../../containers/SortAlphabetically";

const ToolBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <StatusSelect />
      <CategorySelect />
      <AgeSelect />
      <ResetSettings />
      <SortAlphabetically />
    </div>
  );
};

export default ToolBar;

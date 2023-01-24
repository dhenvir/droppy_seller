/**
 =========================================================
 * Material Dashboard 2 PRO React TS - v1.0.1
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import { ReactNode, useState } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { importAssetIconAsImage } from "utils/Utils";

// Declaring props types for CompleStatisticsCard
interface Props {
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
    | any;
  title: string;
  amount: string | number;
  amountDataType?: string;
  percentage: string | number;
  comparedTo?: string;
  icon: ReactNode | string;

  [key: string]: any;
}

function Tile({ color, title, amount, percentage, comparedTo, icon }: Props): JSX.Element {
  const [tileIcon, setTileIcon] = useState(null);
  const percentageOfAmount = typeof percentage === "string" ? parseFloat(percentage) : percentage;
  if (typeof icon === "string") {
    importAssetIconAsImage(icon, "svg", setTileIcon);
  } else {
    setTileIcon(icon);
  }
  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          style={{ background: color }}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          {typeof icon !== "string" ? (
            <Icon fontSize="medium" color="inherit">
              {icon}
            </Icon>
          ) : (
            <img src={tileIcon} style={{ width: "50px", height: "50px" }} alt={title} />
          )}
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
          <MDTypography variant="h4">{amount}</MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox pb={2} px={2}>
        <MDTypography component="p" variant="button" color="text" display="flex">
          <MDTypography
            component="span"
            variant="button"
            fontWeight="bold"
            color={percentageOfAmount > 0 ? "success" : "error"}
          >
            {percentage}%
          </MDTypography>
          &nbsp; than last {comparedTo}
        </MDTypography>
      </MDBox>
    </Card>
  );
}

// Declaring defualt props for Tile
Tile.defaultProps = {
  color: "info",
  comparedTo: "week",
};

// @ts-ignore
export default Tile;

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

import { useState } from "react";

// Material Dashboard 2 PRO React TS components

// Custom styles for the MDButton
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import Stack from "@mui/material/Stack";

import { importAssetIconAsImage } from "utils/Utils";

// Declaring props types for MDAlert
interface Props {
  assetSvgIconName?: string;
  actionTitle?: string;
  iconStyle?: object;
  titleStyle?: object;
  bg_color?: string;

  [key: string]: any;
}

function ActionIcon(props: Props): JSX.Element | null {
  const { assetSvgIconName, actionTitle, titleStyle, iconStyle, bg_color } = props;
  const [svgIcon, setSvgIcon] = useState("");
  const [buttonOpacity, setButtonOpacity] = useState("100%");
  // const defaulticon = importAssetIconAsImage("default", "svg", setSvgIcon);
  const defaulticon = "";
  importAssetIconAsImage(assetSvgIconName, "svg", setSvgIcon);

  // const img = svgIcon ? ():null

  return (
    <MDButton
      variant="text"
      style={{
        opacity: buttonOpacity,
        borderRadius: "50%",
        background: bg_color,
        width: "100px",
        height: "100px",
      }}
      onMouseOver={() => setButtonOpacity("50%")}
      onMouseOut={() => setButtonOpacity("100%")}
    >
      <Stack spacing={0.5} alignItems="center">
        <img className="action-icon" src={svgIcon} style={iconStyle} />
        <MDTypography variant="Button" fontWeight="medium" style={titleStyle}>
          {actionTitle}
        </MDTypography>
      </Stack>
    </MDButton>
  );
}

// Declaring default props for ActionIcon
ActionIcon.defaultProps = {
  assetSvgIconName: "add-coins",
  actionTitle: "Add Coins",
  iconStyle: {
    width: "30px",
    height: "30px",
  },
  titleStyle: {
    textTransform: "uppercase",
    color: "#FFF",
    lineHeight: "1.2",
  },
};

export default ActionIcon;

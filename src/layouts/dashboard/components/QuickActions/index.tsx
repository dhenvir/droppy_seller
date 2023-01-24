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

// @react-jvectormap components

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// react-router-dom components
import { Link } from "react-router-dom";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS custom components
import ActionIcon from "components/Custom/ActionIcon";
// Data
import quickActionsData from "layouts/dashboard/components/QuickActions/data/quickActionsData";

function QuickActions(): JSX.Element {
  const createActionIcons = () => {
    return quickActionsData.map((action) => {
      return (
        <Grid item xs={4} sm={3} md={3} lg={2} key={action.svg}>
          <Link to={action.route} key={action.title}>
            <ActionIcon
              actionTitle={action.title}
              assetSvgIconName={action.svg}
              // bg_color={action.bg_color}
              titleStyle={{
                textTransform: "uppercase",
                color: action.color,
                lineHeight: "1.2",
              }}
              iconStyle={{
                width: "50px",
                height: "50px",
              }}
            />
          </Link>
        </Grid>
      );
    });
  };

  const actions = createActionIcons();
  return (
    <Card sx={{ width: "100%", height: "100%", padding: "10px 20px" }}>
      <MDTypography mx={2} variant="caption" fontWeight="medium">
        Quick Actions
      </MDTypography>
      <Grid container spacing={1} my="auto" mx="auto" p={0} sx={{ width: "100%" }}>
        {actions}
      </Grid>
    </Card>
  );
}

export default QuickActions;

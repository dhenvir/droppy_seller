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

import { useState, useEffect, ReactNode } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import burceMars from "assets/images/sample-profile.jpg";
import backgroundImage from "assets/images/bg-profile.jpeg";

function Header({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Grid container xs={12} md={11} xl={9} mx="auto">
        <Card
          sx={{
            position: "relative",
            mt: -8,
            mx: 3,
            pt: 2,
            pb: 5,
            px: 2,
            // maxWidth: "800px",
          }}
        >
          <Grid
            container
            spacing={1}
            mt={-9.5}
            sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
          >
            <MDAvatar src={burceMars} alt="profile-image" size="xxxl" shadow="sm" />
            <MDBox sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <MDTypography variant="h4" fontWeight="medium" sx={{ mt: 1 }}>
                Richard Davis
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                Seller
              </MDTypography>
            </MDBox>
          </Grid>
          {children}
        </Card>
      </Grid>
    </MDBox>
  );
}

// Declaring default props for Header
Header.defaultProps = {
  children: "",
};

export default Header;

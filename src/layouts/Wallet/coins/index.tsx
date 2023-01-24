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
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/DashboardNavbar";
import Breadcrumbs from "examples/Breadcrumbs";
import Footer from "examples/Footer";

// react-router components
import { useLocation, Link } from "react-router-dom";

function AddProduct(): JSX.Element {
  const route = useLocation().pathname.split("/").slice(1);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} />
      <MDBox py={3}>
        <Grid container>
          <Grid item container xs={12} md={6}>
            <Grid item container xs={6}>
              <Grid item xs={6}>
                <Card sx={{ minHeight: "90px", m: 1 }}></Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ minHeight: "90px", m: 1 }}></Card>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ minHeight: "90px", m: 1 }}></Card>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ minHeight: "40px", m: 1 }}></Card>
            <Card sx={{ minHeight: "40px", m: 1 }}></Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Card sx={{ minHeight: "63vh", m: 1 }}></Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ minHeight: "63vh", m: 1 }}></Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddProduct;

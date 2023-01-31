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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/DashboardNavbar";
import Breadcrumbs from "examples/Breadcrumbs";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";

// react-router components
import { useLocation } from "react-router-dom";
import { useState } from "react";

//Product list layouts
import ProductList from "layouts/products/components/ProductsList";

// Data
import AllData from "layouts/products/data/productListData";

function AddProduct(): JSX.Element {
  const route = useLocation().pathname.split("/").slice(1);
  const [tabValue, setTabValue] = useState(0);
  const [view, setView] = useState(false);
  const [search, setSearch] = useState("");

  const handleSetTabValue = (event: any, newValue: any) => {
    setTabValue(newValue);
    if (newValue === 0) setView(false);
    else if (newValue === 1) setView(true);
  };

  // 👇️ called every time input's value changes
  const handleChangeSearch = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} />
      <MDBox py={3}>
        <MDBox p={1}>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={6} lg={3} pt={1} px={2}>
              <MDBox>
                <MDInput label="Search..." size="small" fullWidth onChange={handleChangeSearch} />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3} pt={1} px={2}>
              <Tabs orientation="horizontal" value={tabValue} onChange={handleSetTabValue}>
                <Tab
                  label="All"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      home
                    </Icon>
                  }
                />
                <Tab
                  label="My Inventory"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      email
                    </Icon>
                  }
                />
              </Tabs>
            </Grid>
          </Grid>
          <MDBox minHeight="69vh" p={1}>
            <ProductList inventory={view} searchname={search} data={AllData} />
          </MDBox>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddProduct;

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

//MUI3 components
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/DashboardNavbar";
import Breadcrumbs from "examples/Breadcrumbs";
import Footer from "examples/Footer";

//utiluty
import { pesoFormat } from "utils/Utils";

// react-router components
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const OrderTabs = [
  {
    title: "Package",
    icon: "shopping_basket",
  },
  {
    title: "Parcel",
    icon: "shopping_basket",
  },
  {
    title: "Dropship",
    icon: "local_shipping",
  },
];

function AddProduct(): JSX.Element {
  const route = useLocation().pathname.split("/").slice(1);
  const [tabValue, setTabValue] = useState("Package");
  const [inventoryLocation, setInventoryLocation] = useState(null);

  const handleSetTabValue = (event: any, newValue: any) => {
    setTabValue(newValue);
  };

  const handleChangeInventoryLocation = (event: any) => {
    setInventoryLocation(event.target?.value);
  };

  const renderTabs = (tabs: { title: string; icon: string }[]) =>
    tabs.map((tab: any, key: any) => {
      return (
        <Tab
          key={tab.title}
          sx={{ padding: "0.5rem 1rem" }}
          value={tab.title}
          label={
            <>
              {tab.icon && <Icon>{tab.icon}</Icon>}
              &nbsp;{tab.title}
            </>
          }
        />
      );
    });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} />
      <MDBox py={3} minHeight="73vh">
        <Card sx={{ padding: "1rem" }}>
          <MDBox display={"flex"} justifyContent={"flex-end"}>
            <Tabs orientation={"horizontal"} value={tabValue} onChange={handleSetTabValue}>
              {renderTabs(OrderTabs)}
            </Tabs>
          </MDBox>
          <MDBox>
            <FormControl>
              <MDTypography id="buttons-group" variant="caption">
                Choose where to stock your inventory
              </MDTypography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={inventoryLocation}
                onChange={handleChangeInventoryLocation}
                sx={{ flexDirection: "row" }}
              >
                <MDTypography
                  component={FormControlLabel}
                  variant="overline"
                  value="luzon"
                  control={<Radio />}
                  label="Luzon"
                />
                <MDTypography
                  component={FormControlLabel}
                  variant="overline"
                  value="vismin"
                  control={<Radio />}
                  label="Vis/Min"
                />
              </RadioGroup>
            </FormControl>
          </MDBox>
          <MDBox
            sx={{ borderTop: "1px solid black", padding: "1rem 0 0 0" }}
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Stack>
              <MDTypography variant="caption">Total Amount:</MDTypography>
              <MDTypography variant="h4" sx={{ ontWeight: "bold" }}>
                {pesoFormat(5460)}
              </MDTypography>
            </Stack>
            <MDButton variant="gradient" color="info">
              Purchase
            </MDButton>
          </MDBox>
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddProduct;

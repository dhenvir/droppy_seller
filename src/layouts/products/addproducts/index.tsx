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

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

// @mui material components
import { Grid, Icon, Badge, Checkbox, Link, Card } from "@mui/material";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/DashboardNavbar";
import Breadcrumbs from "examples/Breadcrumbs";
import Footer from "examples/Footer";
import MDSnackbar from "components/MDSnackbar";
import MDTypography from "components/MDTypography";

// react components
import { useLocation } from "react-router-dom";
import { useState } from "react";

//steps components
import OrderDetails from "layouts/products/components/orderdetails";
import SelectProduct from "layouts/products/components/selectProduct";

//import utils
import { haveselectedproducts } from "utils/Utils";

function getStepContent(stepIndex: number): JSX.Element {
  switch (stepIndex) {
    case 0:
      return <SelectProduct />;
    case 1:
      return <OrderDetails />;
    default:
      return null;
  }
}

function AddProduct(): JSX.Element {
  const route = useLocation().pathname.split("/").slice(1);
  const [activeStep, setActiveStep] = useState<number>(0);
  const handleBack = () => setActiveStep(activeStep - 1);
  const procced = () => {
    //add error condition when seller have no product selected
    if (!haveselectedproducts(localStorage.getItem("ProductListData"))) {
      setShowerr(!showerr);
      setActiveStep(0);
    } else if (false) {
    } else {
      setActiveStep(activeStep + 1);
      // setActiveStep(!(activeStep == 1) ? activeStep + 1 : activeStep);
    }
  };
  const [showerr, setShowerr] = useState(false);
  const closeSnackbar = () => setShowerr(!showerr);
  const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false);
  const handleAgree = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasAgreedToTerms(event.target.checked);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} />
      <MDBox py={3}>
        <Card sx={{ minHeight: "72vh" }}>
          {getStepContent(activeStep)}
          {activeStep === 0 ? (
            <Grid container justifyContent="flex-end" spacing={1} sx={{ px: 2, mb: 2 }}>
              <Grid item xs={12} md={3}>
                <MDButton variant="gradient" color="info" fullWidth onClick={procced}>
                  Proceed
                </MDButton>
              </Grid>
            </Grid>
          ) : activeStep === 1 ? (
            <Grid container justifyContent="flex-end" spacing={1} sx={{ px: 2, mb: 2, mt: "auto" }}>
              <Grid container justifyContent="flex-end" alignItems="center">
                <Grid item xs={12} md={4}>
                  <MDBox display="flex" flexWrap="wrap" justifyContent="center">
                    <MDTypography variant="caption">
                      <Checkbox onChange={handleAgree} />
                      Do You Agree to&nbsp;
                    </MDTypography>
                    <Link
                      variant="caption"
                      component="button"
                      sx={{ textDecoration: "underline", fontWeight: "medium" }}
                      // onClick={() => {
                      //   // on click should open a modal for terms and condition
                      //   console.info("I'm a button.");
                      // }}
                    >
                      Warehousing and Logistics Terms and Conditions?
                    </Link>
                  </MDBox>
                </Grid>
              </Grid>
              <Grid item xs={12} md={1}>
                <MDButton variant="gradient" color="light" onClick={handleBack} fullWidth>
                  back
                </MDButton>
              </Grid>
              <Grid item xs={12} md={3}>
                <MDButton
                  type="submit"
                  variant="gradient"
                  color="info"
                  fullWidth
                  form="delivery-details-form"
                  disabled={!hasAgreedToTerms}
                >
                  Proceed
                </MDButton>
              </Grid>
            </Grid>
          ) : null}
        </Card>
      </MDBox>
      <Footer />
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="3.25rem"
        height="3.25rem"
        bgColor="white"
        shadow="sm"
        borderRadius="50%"
        position="fixed"
        right="2rem"
        bottom="2rem"
        zIndex={99}
        color="dark"
        sx={{ cursor: "pointer" }}
        // onClick={handleConfiguratorOpen}
      >
        <Badge color="secondary" badgeContent={0} showZero overlap="circular">
          <Icon fontSize="small" color="inherit">
            redeem
          </Icon>
        </Badge>
      </MDBox>
      <MDSnackbar
        color="error"
        icon="warning"
        title="Notice!"
        content="You need to select products you want to add."
        dateTime=""
        open={showerr}
        close={closeSnackbar}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
    </DashboardLayout>
  );
}

export default AddProduct;

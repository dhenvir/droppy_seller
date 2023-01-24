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

// react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// images
import error_img from "assets/images/401 Error Unauthorized-rafiki.svg";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/auth/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Error404(): JSX.Element {
  const navigate = useNavigate();
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox p={3}>
          <MDTypography variant="h3" mb={4}>
            Oops...
          </MDTypography>
          <MDBox component="img" src={error_img} alt="error 404" mx={5} mt={-5} />
          <MDTypography variant="caption" mb={4}>
            You are not allowed to access this page.
            <br />
            Please try to Log in.
          </MDTypography>
          <MDBox component="form" role="form">
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                onClick={() => navigate("/Signin")}
                fullWidth
              >
                Go Back to Log in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Error404;

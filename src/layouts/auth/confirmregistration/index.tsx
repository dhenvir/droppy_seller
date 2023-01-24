// react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// images
import error_img from "assets/images/Newsletter-bro.svg";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/auth/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Confirmregistration(): JSX.Element {
  const navigate = useNavigate();

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox p={3}>
          <MDBox component="img" src={error_img} alt="error 404" mx={5} />
          <MDTypography variant="h4" mb={1}>
            Thank you for your registration
          </MDTypography>
          <MDTypography variant="body2" sx={{ fontSize: "13px" }}>
            We have send you a confirmation to your email. Please confirm your email address to
            activate your acount.
          </MDTypography>
          <MDBox component="form" role="form">
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={() => navigate("/Signin", { replace: true })}
              >
                Go to Login Page
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Confirmregistration;

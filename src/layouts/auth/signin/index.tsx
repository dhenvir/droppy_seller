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

// react components
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Authentication layout components
import BasicLayout from "layouts/auth/components/BasicLayout";
import SocialLogin from "layouts/auth/components/socialLogin";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

//sample data
import SampleLogin from "layouts/auth/data/sampleuserlogin";

function Signin(): JSX.Element {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const toggleSnackbar = () => setShow(!show);

  const schema = yup.object().shape({
    email: yup.string().email("Please Enter valid email.").required("Please Enter your email."),
    pwd: yup.string().required("Password required").min(6, "Password must be at least 6 character"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    var authenticated = false;
    SampleLogin.map((user) => {
      if (user.email === data.email && user.password === data.pwd) {
        authenticated = true;
        localStorage.setItem(
          "user",
          JSON.stringify({
            role: user.role,
            fname: user.fname,
            lname: user.lname,
            address: user.address,
            coins: user.coins,
          })
        );
      }
    });
    if (authenticated) {
      navigate("/" + JSON.parse(localStorage.getItem("user")).role + "/dashboards");
    } else {
      setShow(true);
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDTypography variant="h5" mb={4}>
            Login Account
          </MDTypography>
          <MDSnackbar
            color="error"
            icon="warning"
            title="Login not successful!"
            content="The email and password you entered did not match our records. Please double check and try again."
            dateTime=""
            open={show}
            close={toggleSnackbar}
            bgWhite
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          />
          <MDBox component="form" role="form" onSubmit={handleSubmit(onSubmit)}>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth {...register("email")} />
              <MDTypography className="inputerrormsg"> {errors.email?.message} </MDTypography>
            </MDBox>
            <MDBox mb={1}>
              <MDInput
                inputProps={{ autoComplete: "off" }}
                type="password"
                label="Password"
                fullWidth
                {...register("pwd")}
              />
              <MDTypography className="inputerrormsg"> {errors.pwd?.message} </MDTypography>
            </MDBox>
            <MDBox display="flex">
              <MDTypography
                component={Link}
                to="/resetpassword"
                color="info"
                fontWeight="regular"
                sx={{ fontSize: "12px", m: "-5px 5px 0 auto" }}
              >
                Recover Password
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                SIGN IN
              </MDButton>
            </MDBox>
            <SocialLogin />
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/signup"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up here
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Signin;

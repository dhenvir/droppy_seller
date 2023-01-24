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

// Authentication layout components
import BasicLayout from "layouts/auth/components/BasicLayout";
import SocialLogin from "layouts/auth/components/socialLogin";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

//auxilliary CSS [import only once--]
import "layouts/auth/signup/style.css";

function Signup(): JSX.Element {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    fname: yup.string().required("Please provide your First name."),
    lname: yup.string().required("Please provide your Last name."),
    email: yup.string().email("Please Enter valid email.").required("Please Enter your email."),
    pwd: yup.string().required("Password required").min(6, "Password must be at least 6 character"),
    pwd2: yup
      .string()
      .oneOf([yup.ref("pwd"), null], "Passwords Don't Match")
      .required("You need to confirm your password."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    localStorage.setItem("users", JSON.stringify(data));
    navigate("/confirmregistration");
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDTypography variant="h5" mb={4}>
            Create Account
          </MDTypography>
          <MDBox component="form" role="form" onSubmit={handleSubmit(onSubmit)}>
            <MDBox mb={1}>
              <MDInput type="text" label="First name" {...register("fname")} fullWidth />
              <MDTypography className="inputerrormsg"> {errors.fname?.message} </MDTypography>
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="text" label="Lastst name" {...register("lname")} fullWidth />
              <MDTypography className="inputerrormsg"> {errors.lname?.message} </MDTypography>
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="email" label="Email" {...register("email")} fullWidth />
              <MDTypography className="inputerrormsg"> {errors.email?.message} </MDTypography>
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="password" label="Password" {...register("pwd")} fullWidth />
              <MDTypography className="inputerrormsg"> {errors.pwd?.message} </MDTypography>
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="password" label="Confirm Password" {...register("pwd2")} fullWidth />
              <MDTypography className="inputerrormsg"> {errors.pwd2?.message} </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                SIGN UP
              </MDButton>
            </MDBox>
            <SocialLogin />
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/signin"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign in here
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Signup;

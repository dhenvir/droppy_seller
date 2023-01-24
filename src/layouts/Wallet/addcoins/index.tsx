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
// react imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/DashboardNavbar";
import Breadcrumbs from "examples/Breadcrumbs";
import Footer from "examples/Footer";

// react-router components
import { useLocation } from "react-router-dom";

function AddCoin(): JSX.Element {
  const route = useLocation().pathname.split("/").slice(1);
  const userinf = JSON.parse(localStorage.getItem("user"));

  const schema = yup.object().shape({
    fname: yup.string().required("Please Enter your email."),
    lname: yup.string(),
    address: yup.string().required("Address is required."),
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
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} />
      <MDBox py={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Card sx={{ minHeight: "74vh", p: 2 }}>
              <MDBox component="form" role="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                  <Grid item xs={12} md={6} p={1}>
                    <MDInput
                      label="Firstname"
                      defaultValue={userinf.fname}
                      type="text"
                      fullWidth
                      {...register("fname")}
                      inputProps={{ autoComplete: "off" }}
                    />
                    <MDTypography className="inputerrormsg"> {errors.fname?.message} </MDTypography>
                  </Grid>
                  <Grid item xs={12} md={6} p={1}>
                    <MDInput
                      label="Lastname"
                      defaultValue={userinf.lname}
                      type="text"
                      fullWidth
                      {...register("lname")}
                      inputProps={{ autoComplete: "off" }}
                    />
                    <MDTypography className="inputerrormsg"> {errors.lname?.message} </MDTypography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={6} p={1}>
                    <MDInput
                      label="Email"
                      type="text"
                      fullWidth
                      {...register("email")}
                      inputProps={{ autoComplete: "off" }}
                    />
                    <MDTypography className="inputerrormsg"> {errors.fname?.message} </MDTypography>
                  </Grid>
                  <Grid item xs={12} md={6} p={1}>
                    <MDInput
                      label="Mobile No."
                      type="text"
                      fullWidth
                      {...register("mobile")}
                      inputProps={{ autoComplete: "off" }}
                    />
                    <MDTypography className="inputerrormsg"> {errors.lname?.message} </MDTypography>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddCoin;

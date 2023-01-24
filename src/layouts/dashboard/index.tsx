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

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/DashboardNavbar";
import Footer from "examples/Footer";

// Anaytics dashboard components
import QuickActions from "layouts/dashboard/components/QuickActions";
import SalesCard from "layouts/dashboard/components/SalesCard";
import Transactions from "layouts/dashboard/components/Transactions";
import Reports from "layouts/dashboard/components/Reports";
import "./Analytics.css";

// Images

function Analytics(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={1} id="quick_action_and_lifetime_sales">
          <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
            <QuickActions />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
            <SalesCard />
          </Grid>
        </Grid>

        <MDBox mt={3}>
          <Transactions />
        </MDBox>

        <MDBox mt={3}>
          <Reports />
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Analytics;

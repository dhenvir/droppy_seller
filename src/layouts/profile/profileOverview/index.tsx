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
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "layouts/profile/components/ProfileInfoCard";

// Overview page components
import Header from "layouts/profile/components/Header";

// Data

// Images

function Overview(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <Grid item xs={12} md={10} xl={9} mx="auto">
          <ProfileInfoCard
            title="profile information"
            description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
            info={{
              maximum88Account: "Alec M. Thompson",
              mobile: "(44) 123 1234 123",
              email: "alecthompson@mail.com",
              address: "Purok 4 Brgy. Santiago, Botolan, Zambales",
            }}
            social={[
              {
                link: "",
                icon: <FacebookIcon />,
                color: "facebook",
              },
              {
                link: "",
                icon: <TwitterIcon />,
                color: "twitter",
              },
              {
                link: "",
                icon: <InstagramIcon />,
                color: "instagram",
              },
            ]}
            action={{ route: "", tooltip: "Edit Profile" }}
            shadow={false}
          />
        </Grid>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;

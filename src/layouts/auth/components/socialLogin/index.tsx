// @mui material components
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// @mui icons
import FacebookIcon from "assets/images/icons/fb.svg";
import GoogleIcon from "assets/images/icons/google.svg";

function SocialLogin(): JSX.Element {
  return (
    <>
      <Divider sx={{ mt: 5, opacity: 1 }}>
        <MDTypography sx={{ fontSize: "12px", mt: "-10px", backgroundColor: "#FFF", px: 1 }}>
          or continue with
        </MDTypography>
      </Divider>
      <Grid container justifyContent="center" sx={{ mx: "auto", my: 2 }}>
        <Grid item mx={1}>
          <MDButton variant="outlined" color="info">
            <MDBox component="img" src={GoogleIcon} alt="googleicon" width="1.4rem" />
          </MDButton>
        </Grid>
        <Grid item mx={1}>
          <MDButton variant="outlined" color="info">
            <MDBox component="img" src={FacebookIcon} alt="googleicon" width="1.4rem" />
          </MDButton>
        </Grid>
      </Grid>
    </>
  );
}
export default SocialLogin;

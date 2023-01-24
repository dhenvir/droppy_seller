//lottie animation components
import Lottie from "lottie-react";
import successAnimation from "assets/lottie/succes.json";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// @mui material components
import Grid from "@mui/material/Grid";

//utils
import { pesoFormat } from "utils/Utils";
import { format } from "date-fns";
import MDButton from "components/MDButton";
import { useNavigate } from "react-router-dom";

function purchaseComplete(): JSX.Element {
  const navigate = useNavigate();
  const WAREHOUSE_FEE = 75;
  var date = new Date();

  const backtoinventory = () => {
    navigate("/seller/products-list");
    localStorage.removeItem("ProductListData");
  };

  date.setMonth(date.getMonth() + 3);
  return (
    <MDBox my="auto">
      <Grid container justifyContent="center">
        <Grid item xs={11} md={6}>
          <Grid item xs={6} md={4} mx="auto">
            <Lottie animationData={successAnimation} loop={true} />
          </Grid>
          <MDTypography variant="h3" sx={{ textAlign: "center", p: 2 }}>
            Add Product Succesful
          </MDTypography>
          <MDBox bgColor="#E0E5F0" borderRadius="lg">
            <MDTypography variant="subtitle2" p={2}>
              Note: Your {pesoFormat(WAREHOUSE_FEE)}/Month Warehousing Subscription Fee is now
              started and will automatically renew in {format(date, "MMM dd, yyyy")}.Be sure to have
              atleast {WAREHOUSE_FEE} Coins in your wallet. Thanks!
            </MDTypography>
          </MDBox>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={1} sx={{ px: 2, mb: 2, mt: 2 }}>
        <Grid item xs={12} lg={3}>
          <MDButton variant="outlined" color="info" fullWidth>
            View Reciept
          </MDButton>
        </Grid>
        <Grid item xs={12} lg={3}>
          <MDButton variant="gradient" color="info" fullWidth onClick={backtoinventory}>
            Back to Inventory
          </MDButton>
        </Grid>
      </Grid>
    </MDBox>
  );
}
export default purchaseComplete;

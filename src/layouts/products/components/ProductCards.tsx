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
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//custom components
import PlusMinusBtn from "layouts/products/components/PlusMinusBtn";

//imports utils
import { pesoFormat } from "utils/Utils";

// Declaring props types for BookingCard
interface Props {
  image: string;
  title: string;
  supplier: string;
  price: number;
  allstock: number;
  inventorystock: number;
  addingproduct?: boolean;
  inventory?: boolean;
  inputvalue?: number;
  [key: string]: any;
}

function ProductCards({
  image,
  title,
  supplier,
  price,
  allstock,
  inventorystock,
  addingproduct,
  inventory,
  inputvalue,
  steps,
  pkey,
}: Props): JSX.Element {
  return (
    <Card sx={{ border: "solid 0.2px #ced4da" }}>
      <MDBox position="relative" borderRadius="lg" mt="-2rem" mx={2} className="card-header">
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="12rem"
          position="relative"
          left={0}
          top="0"
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            border: "solid 0.2px #ced4da",
          }}
        />
      </MDBox>
      <MDBox display="flex" justifyContent="space-between" flexDirection="column" height="10rem">
        <MDBox textAlign="center" pt={1} px={1}>
          <MDTypography variant="h6" fontWeight="medium" noWrap>
            {title}
          </MDTypography>
          <MDTypography color="text" sx={{ fontSize: 11 }}>
            {supplier}
          </MDTypography>
        </MDBox>
        {addingproduct ? (
          <>
            <Grid container textAlign="center" pt={1} px={1} display={{ md: "block", xs: "none" }}>
              <MDTypography color="text" sx={{ fontSize: 12 }}>
                My stock: {inventorystock}
              </MDTypography>
              <MDTypography color="text" sx={{ fontSize: 12 }}>
                Main stock: {allstock}
              </MDTypography>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between" px={1}>
              <Grid item xs={12} md={7} mb={1}>
                <PlusMinusBtn
                  max={allstock}
                  value={inputvalue}
                  pkey={pkey}
                  steps={steps ? steps : 1}
                />
              </Grid>
              <Grid item xs={12} md={4} mb={1} justifyContent="center">
                <MDButton variant="gradient" color="info" fullWidth>
                  <Grid display={{ md: "flex", xs: "none" }}>
                    <Icon>redeem</Icon>
                  </Grid>
                  <Grid display={{ md: "none", xs: "flex" }}>
                    <MDTypography color="white" sx={{ fontSize: 13 }} p={0}>
                      Add to Package
                    </MDTypography>
                  </Grid>
                </MDButton>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            {/**/}
            <Divider />
            <MDBox display="flex" justifyContent="space-between" alignItems="center" pb={2} px={3}>
              <MDTypography variant="body2" fontWeight="regular" color="text">
                {pesoFormat(price)}
              </MDTypography>
              <MDTypography variant="button" fontWeight="light" color="text">
                stocks: {inventory ? inventorystock : allstock}
              </MDTypography>
            </MDBox>
          </>
        )}
      </MDBox>
    </Card>
  );
}

export default ProductCards;

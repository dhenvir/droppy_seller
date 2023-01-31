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
      {addingproduct ? (
        <MDBox display="flex" justifyContent="space-between" flexDirection="column" height="10rem">
          <MDBox textAlign="center" pt={1} px={1}>
            <MDTypography variant="h6" fontWeight="medium">
              {title}
            </MDTypography>
            <MDTypography color="text" sx={{ fontSize: 11 }}>
              {supplier}
            </MDTypography>
          </MDBox>
          <MDBox textAlign="center" pt={1} px={1}>
            <MDTypography color="text" sx={{ fontSize: 12 }}>
              My stock: {inventorystock}
            </MDTypography>
            <MDTypography color="text" sx={{ fontSize: 12 }}>
              Main stock: {allstock}
            </MDTypography>
          </MDBox>
          <MDBox display="flex" px={2} pb={2}>
            <PlusMinusBtn max={allstock} value={inputvalue} pkey={pkey} steps={steps ? steps : 1} />
          </MDBox>
        </MDBox>
      ) : (
        <MDBox display="flex" justifyContent="space-between" flexDirection="column" height="10rem">
          <MDBox textAlign="center" pt={1} px={1}>
            <MDTypography variant="h6" fontWeight="medium">
              {title}
            </MDTypography>
            <MDTypography color="text" sx={{ fontSize: 11 }}>
              {supplier}
            </MDTypography>
          </MDBox>
          <Divider />
          <MDBox display="flex" justifyContent="space-between" alignItems="center" pb={2} px={3}>
            <MDTypography variant="body2" fontWeight="regular" color="text">
              {pesoFormat(price)}
            </MDTypography>
            <MDTypography variant="button" fontWeight="light" color="text">
              stocks: {inventory ? inventorystock : allstock}
            </MDTypography>
          </MDBox>
        </MDBox>
      )}
    </Card>
  );
}

export default ProductCards;

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

// Material Dashboard 2 PRO React TS components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import Table from "layouts/orders/components/OrderTable";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/DashboardNavbar";
import Breadcrumbs from "examples/Breadcrumbs";
import Footer from "examples/Footer";

//custom data
import { ordersTableData } from "layouts/orders/orderlist/data/ordersTableData";
import { buttonOnTableHeaderContainer } from "layouts/orders/orderlist/styles";

// react-router components
import { useLocation, Link } from "react-router-dom";

function AddProduct(): JSX.Element {
  const route = useLocation().pathname.split("/").slice(1);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} />
      <MDBox py={3} minHeight="73vh">
        <Card>
          <Table
            nodeOnHeader={
              <MDButton
                component={Link}
                to="/my-shop/add-order"
                variant="gradient"
                color="info"
                sx={buttonOnTableHeaderContainer}
              >
                <Icon fontSize="small">add-outlined</Icon>New Order
              </MDButton>
            }
            table={ordersTableData}
          />
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddProduct;

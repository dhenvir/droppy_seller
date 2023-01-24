// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

//custom component
import ProductCards from "layouts/products/components/ProductCards";

// Data
import ProductListData from "layouts/products/data/productListData";

//images
import plusicon from "assets/images/icons/big_plus.svg";

function InventoryProductList(): JSX.Element {
  return (
    <Grid container flexDirection="row">
      <Grid item xs={6} sm={4} md={4} lg={3} xl={2.4}>
        <MDBox mt={12} mx={1} mb={2}>
          <Card sx={{ border: "solid 0.1rem #ced4da" }}>
            <MDBox
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
              component="link"
              to="/seller/products-list/add-product"
            >
              <MDBox
                component="img"
                src={plusicon}
                alt="add btn"
                borderRadius="lg"
                shadow="md"
                width="100%"
                height="20rem"
                position="relative"
                zIndex={1}
              />
            </MDBox>
          </Card>
        </MDBox>
      </Grid>
      {ProductListData.map(
        (product: {
          name: string;
          supplier: string;
          price: any;
          allstock: number;
          img_source: string;
          key: string;
        }) => (
          <Grid item xs={6} sm={4} md={4} lg={3} xl={2.4} key={product.key}>
            <MDBox mt={12} mx={1} mb={2}>
              <ProductCards
                image={product.img_source}
                title={product.name}
                supplier={product.supplier}
                price={product.price}
                stock={product.allstock}
                allstock={0}
                inventorystock={0}
              />
            </MDBox>
          </Grid>
        )
      )}
    </Grid>
  );
}
export default InventoryProductList;

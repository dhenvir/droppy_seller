// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

//custom component
import ProductCards from "layouts/products/components/ProductCards";

// Data
import ProductListData from "layouts/products/data/productListData";

function AllProductsList(): JSX.Element {
  return (
    <Grid container flexDirection="row">
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
export default AllProductsList;

//react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

//custom component
import ProductCards from "layouts/products/components/ProductCards";

//images
import plusicon from "assets/images/icons/big_plus.svg";

// Declaring props types for the Breadcrumbs
interface Props {
  inventory?: boolean;
  add?: boolean;
  searchname?: string;
  data: any[];
  [key: string]: any;
}

function AllProductsList({ inventory, add, searchname, data }: Props): JSX.Element {
  const navigate = useNavigate();
  return (
    <Grid container flexDirection="row">
      {inventory ? (
        <Grid item xs={6} sm={4} md={4} lg={3} xl={2.4}>
          <MDBox mt={8} mx={1} mb={2}>
            <Card sx={{ border: "solid 0.1rem #ced4da" }}>
              <MDButton
                sx={{ padding: 0 }}
                onClick={() => navigate("/seller/products-list/add-product")}
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
              </MDButton>
            </Card>
          </MDBox>
        </Grid>
      ) : null}
      {data.map(
        (product: {
          name: string;
          supplier: string;
          price: number;
          allstock: number;
          inventorystock: number;
          img_source: string;
          add: number;
          key: string;
        }) => {
          if (product.name.toString().toLowerCase().includes(searchname.toLowerCase())) {
            return (
              <Grid item xs={6} sm={4} md={4} lg={3} xl={2.4} key={product.key}>
                <MDBox mt={8} mx={1} mb={2}>
                  <ProductCards
                    image={product.img_source}
                    title={product.name}
                    supplier={product.supplier}
                    price={product.price}
                    allstock={product.allstock}
                    inventorystock={product.inventorystock}
                    addingproduct={add}
                    inventory={inventory}
                    inputvalue={product.add}
                    pkey={product.key}
                  />
                </MDBox>
              </Grid>
            );
          }
        }
      )}
    </Grid>
  );
}
export default AllProductsList;

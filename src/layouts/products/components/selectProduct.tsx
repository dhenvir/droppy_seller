// react-router components
import { useState, useEffect } from "react";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

// @mui material components
import Grid from "@mui/material/Grid";

//Product list layouts
import ProductList from "layouts/products/components/ProductsList";

// Data
import AllData from "layouts/products/data/productListData";

function OrderDetails(): JSX.Element {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  // 👇️ called every time input's value changes
  const handleChangeSearch = (event: any) => {
    setSearch(event.target.value);
  };

  //save product to local storage
  useEffect(() => {
    if (!localStorage.getItem("ProductListData")) {
      localStorage.setItem("ProductListData", JSON.stringify(AllData));
    }
    setList(JSON.parse(localStorage.getItem("ProductListData")));
  }, []);

  return (
    <>
      <Grid container justifyContent="space-between" p={3}>
        <Grid item xs={12} md={6} pt={1} mx="auto">
          <MDBox>
            <MDInput label="Search..." size="small" fullWidth onChange={handleChangeSearch} />
          </MDBox>
        </Grid>
      </Grid>
      <MDBox minHeight="69vh" p={1}>
        <ProductList add searchname={search} data={list} />
      </MDBox>
    </>
  );
}
export default OrderDetails;

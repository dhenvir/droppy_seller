// react-router components
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDSnackbar from "components/MDSnackbar";

// @mui material components
import {
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Modal,
  Card,
} from "@mui/material";

//custom components
import PlusMinusBtn from "layouts/products/components/PlusMinusBtn";
//modal JSX
import PurchaseComplete from "layouts/products/components/purchaseComplete";

//utils
import { pesoFormat, haveselectedproducts } from "utils/Utils";
import "./styles/orderdetails.css";

function OrderDetails(): JSX.Element {
  const [rows, setRows] = useState(JSON.parse(localStorage.getItem("ProductListData")));
  const [showerr, setShowerr] = useState(false);
  const closeSnackbar = () => setShowerr(!showerr);
  const [openModal, setOpenModal] = useState(false);
  const userinf = JSON.parse(localStorage.getItem("user"));
  var orders: any = [];
  var subtotal = 0;
  const LOGISTIC_FEE = 175;
  const WAREHOUSING_FEE = 75;

  const schema = yup.object().shape({
    fname: yup.string().required("Please Enter your email."),
    lname: yup.string(),
    address: yup.string().required("Address is required."),
    inventoryLocation: yup
      .string()
      .nullable()
      .required("Please select where to stock your inventory"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    if (haveselectedproducts(localStorage.getItem("ProductListData"))) {
      data["orders"] = orders;
      setOpenModal(true);
      console.log(data);
    } else {
      setShowerr(true);
    }
  };

  useEffect(() => {
    setRows(JSON.parse(localStorage.getItem("ProductListData")));
  }, [rows]);

  return (
    <Grid container flexDirection="column">
      <Grid container p={0}>
        <MDTypography variant="h5" sx={{ px: 2, pt: 2 }}>
          Order Details
        </MDTypography>
        <TableContainer sx={{ p: 2, boxShadow: "none" }}>
          <Table className="tbl-orderdetails">
            <TableHead sx={{ display: "table-header-group" }}>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(
                (row: {
                  name: string;
                  price: number;
                  allstock: number;
                  add: number;
                  key: string;
                  steps: number;
                }) => {
                  if (row.add > 0) {
                    var obj = { product_id: row.key, qty: row.add };
                    orders.push(obj);
                    var amount = row.add * row.price;
                    subtotal = subtotal + amount;
                    return (
                      <TableRow key={row.key}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell align="right">{pesoFormat(row.price)}</TableCell>
                        <TableCell sx={{ mx: 2 }}>
                          <PlusMinusBtn
                            max={row.allstock}
                            value={row.add}
                            pkey={row.key}
                            steps={row.steps ? row.steps : 1}
                          />
                        </TableCell>
                        <TableCell align="right">{pesoFormat(amount)}</TableCell>
                      </TableRow>
                    );
                  }
                }
              )}
              <TableRow className="tbl-divider">
                <TableCell colSpan={4} />
              </TableRow>
              <TableRow>
                <TableCell rowSpan={4} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">{pesoFormat(subtotal)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Logistic Fee</TableCell>
                <TableCell align="right">{pesoFormat(LOGISTIC_FEE)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Warehousing Fee</TableCell>
                <TableCell align="right">{pesoFormat(WAREHOUSING_FEE)}</TableCell>
              </TableRow>
              <TableRow>
                {/* <TableCell colSpan={1}>Total</TableCell> */}
                <MDTypography component={TableCell} variant="overline" colSpan={1}>
                  Total
                </MDTypography>
                <TableCell align="right" colSpan={2}>
                  {pesoFormat(subtotal + LOGISTIC_FEE + WAREHOUSING_FEE)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Divider variant="middle" sx={{ borderBottom: 2, my: 2 }} />
      <Grid item sx={{ px: 2, pt: 2 }}>
        <MDTypography variant="h5"> Delivery Details</MDTypography>
        <MDBox
          id="delivery-details-form"
          component="form"
          role="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container>
            <Grid item xs={12} md={6} p={1}>
              <MDInput
                label="Firstname"
                defaultValue={userinf.fname}
                type="text"
                fullWidth
                {...register("fname")}
                inputProps={{ autoComplete: "off" }}
              />
              <MDTypography className="inputerrormsg"> {errors.fname?.message} </MDTypography>
            </Grid>
            <Grid item xs={12} md={6} p={1}>
              <MDInput
                label="Lastname"
                defaultValue={userinf.lname}
                type="text"
                fullWidth
                {...register("lname")}
                inputProps={{ autoComplete: "off" }}
              />
              <MDTypography className="inputerrormsg"> {errors.lname?.message} </MDTypography>
            </Grid>
          </Grid>
          <Grid item xs={12} p={1}>
            <MDInput
              inputProps={{ autoComplete: "off" }}
              label="Address"
              defaultValue={userinf.address}
              type="text"
              fullWidth
              multiline
              rows={3}
              {...register("address")}
            />
            <MDTypography className="inputerrormsg"> {errors.address?.message} </MDTypography>
          </Grid>
          <Grid item xs={12} p={1}>
            <MDTypography id="buttons-group" variant="caption">
              Choose where to stock your inventory
            </MDTypography>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              sx={{ flexDirection: "row" }}
            >
              <MDTypography
                component={FormControlLabel}
                variant="overline"
                value="luzon"
                control={<Radio />}
                label="Luzon"
                {...register("inventoryLocation")}
              />
              <MDTypography
                component={FormControlLabel}
                variant="overline"
                value="vismin"
                control={<Radio />}
                label="Vis/Min"
                {...register("inventoryLocation")}
              />
            </RadioGroup>
            <MDTypography className="inputerrormsg">
              {errors.inventoryLocation?.message}
            </MDTypography>
          </Grid>
        </MDBox>
      </Grid>
      <MDSnackbar
        color="error"
        icon="warning"
        title="Notice!"
        content="You've remove all items. Please go back to select products you want to add."
        dateTime=""
        open={showerr}
        close={closeSnackbar}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
      <Modal open={openModal}>
        <Card sx={{ width: "90vw", minHeight: "90vh", m: "5vh auto" }}>
          <PurchaseComplete />
        </Card>
      </Modal>
    </Grid>
  );
}
export default OrderDetails;

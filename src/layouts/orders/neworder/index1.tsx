import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import AppWrapper from 'components/Custom/AppWrapper'
import Breadcrumbs from "components/Custom/Breadcrumbs";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import { pesoFormat } from "utils/Utils";

const OrderTabs = [
  {
    title: "Package",
    icon: "shopping_basket",
  },
  {
    title: "Parcel",
    icon: "shopping_basket",
  },
  {
    title: "Dropship",
    icon: "local_shipping",
  },
];

function AddOrder(): JSX.Element {
  const [breadcrumbsTitle, setBreadcrumbsTitle] = useState("Add New Order");
  const [tabValue, setTabValue] = useState("Package");
  const [inventoryLocation, setInventoryLocation] = useState(null);

  const handleChangeInventoryLocation = (event: any) => {
    setInventoryLocation(event.target?.value);
  };
  const path = useLocation().pathname?.replace("/my-shop/", "");
  const handleSetTabValue = (event: any, newValue: any) => {
    setTabValue(newValue);
  };

  const renderTabs = (tabs: { title: string; icon: string }[]) =>
    tabs.map((tab: any, key: any) => {
      return (
        <Tab
          key={tab.title}
          sx={{ padding: "0.5rem 1rem" }}
          value={tab.title}
          label={
            <>
              {tab.icon && <Icon>{tab.icon}</Icon>}
              &nbsp;{tab.title}
            </>
          }
        />
      );
    });

  useEffect(() => {
    setBreadcrumbsTitle(path);
  }, [path]);

  return (
    // <AppWrapper>
    <>
      <Breadcrumbs
        title={tabValue}
        routes={[
          { route: "my-shop/orders", name: "Orders" },
          { route: "my-shop/add-order", name: "Add New Order" },
        ]}
      />
      <MDBox mt={2} bgColor={"white"} p={2}>
        <MDBox display={"flex"} justifyContent={"flex-end"}>
          <Tabs orientation={"horizontal"} value={tabValue} onChange={handleSetTabValue}>
            {renderTabs(OrderTabs)}
          </Tabs>
        </MDBox>
        <MDBox>
          <FormControl>
            <MDTypography id="buttons-group" variant="caption">
              Choose where to stock your inventory
            </MDTypography>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={inventoryLocation}
              onChange={handleChangeInventoryLocation}
              sx={{ flexDirection: "row" }}
            >
              <MDTypography
                component={FormControlLabel}
                variant="overline"
                value="luzon"
                control={<Radio />}
                label="Luzon"
              />
              <MDTypography
                component={FormControlLabel}
                variant="overline"
                value="vismin"
                control={<Radio />}
                label="Vis/Min"
              />
            </RadioGroup>
          </FormControl>
        </MDBox>
      </MDBox>
      <MDBox
        bgColor="white"
        sx={{ borderTop: "1px solid black" }}
        display="flex"
        justifyContent={"space-between"}
        px={2}
        py={1}
        alignItems="center"
      >
        <>
          <Stack>
            <MDTypography variant="caption">Total Amount:</MDTypography>
            <MDTypography variant="overline" sx={{ ontWeight: "bold" }}>
              {pesoFormat(5460)}
            </MDTypography>
          </Stack>
          <MDButton variant="gradient" color="info">
            Purchase
          </MDButton>
        </>
      </MDBox>
    </>
    // </AppWrapper>
  );
}
export default AddOrder;

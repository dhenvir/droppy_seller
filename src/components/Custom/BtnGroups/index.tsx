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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React TS examples components

// react-router components
import { useState } from "react";

// Declaring props types for the Breadcrumbs
interface Props {
  buttonlist: any;
}

function BtnGroups({ buttonlist }: Props): JSX.Element {
  // 
  const [tabValue, setTabValue] = useState("Package");

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

  return (
    <MDBox display={"flex"} justifyContent={"flex-end"}>
        <Tabs orientation={"horizontal"} value={tabValue} onChange={handleSetTabValue}>
            {renderTabs(buttonlist)}
        </Tabs>
    </MDBox>
  );
}

export default BtnGroups;

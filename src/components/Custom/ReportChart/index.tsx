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

import { ReactNode, useMemo, useState } from "react";

// react-chartjs-2 components
import { Bar, Line, Pie } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { formatDistance, isDate } from "date-fns";
// ReportsBarChart configurations
import configs from "components/Custom/ReportChart/configs";

// Declaring props types for ReportsBarChart
interface Props {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark";
  title: string;
  description?: string | ReactNode;
  date: string;
  chart: {
    type?: "Pie" | "Bar" | "Line";
    labels: string[];
    datasets: {
      label: string;
      data: number[];
    };
  };

  [key: string]: any;
}

function ReportChart({ type, color, title, description, date, chart }: Props): JSX.Element {
  const [chartComponent, setChartComponent] = useState(chart.type || "Bar");
  const { data, options } = configs(chart.type || "Bar", chart.labels || [], chart.datasets || {});

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        {useMemo(
          () => (
            <MDBox
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              {chart.type == "Line" ? (
                <Line data={data} options={options} />
              ) : chart.type == "Pie" ? (
                <Pie data={data} options={options} />
              ) : (
                <Bar data={data} options={options} />
              )}
            </MDBox>
          ),
          [chart, color]
        )}
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
          <Divider />
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </MDTypography>
            <MDTypography variant="button" color="text" fontWeight="light">
              {isDate(new Date(date))
                ? formatDistance(new Date(date), new Date(), { addSuffix: true })
                : date}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ReportsBarChart
ReportChart.defaultProps = {
  color: "dark",
  description: "",
};

export default ReportChart;

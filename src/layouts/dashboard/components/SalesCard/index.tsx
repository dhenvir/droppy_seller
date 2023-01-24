import { useState } from "react";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import { pesoFormat } from "utils/Utils";

function SalesCard(): JSX.Element {
  const [sales, setSales] = useState(pesoFormat(1000000));
  const [startMonth, setStartMonth] = useState("June 2020");
  return (
    <Card
      style={{
        background:
          "radial-gradient(167.26% 220.29% at 86.57% -41.07%, #4285F4 6.48%, #0F2E68 47.68%, #031537 81.65%)",
        height: "100%",
        width: "100%",
        padding: "20px 10px 10px",
      }}
    >
      <MDTypography mx={2} color="white" variant="h6" fontWeight="medium">
        Lifetime Sales
      </MDTypography>
      <MDBox py={1} style={{ height: "100%" }}>
        <MDTypography
          mx={2}
          style={{
            color: "#FFD600",
            fontFamily: "Outfit",
          }}
          variant="h2"
          // verticalAlign="middle"
          align="right"
        >
          {sales}
        </MDTypography>
      </MDBox>
      <MDTypography
        px={2}
        style={{
          color: "#9BB8E8",
          font: "Roboto",
        }}
        variant="h6"
        fontWeight="regular"
        // align="right"
        verticalAlign="text-bottom"
      >
        since {startMonth}
      </MDTypography>
    </Card>
  );
}

export default SalesCard;

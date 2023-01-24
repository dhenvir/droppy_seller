import { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import Tile from "components/Custom/Tile";
import transactionsData from "./data/transactionsData";

function Transactions(): JSX.Element {
  const [transactions, setTransactions] = useState(transactionsData);
  const tiles = (transactions || []).map((tile, key) => {
    return (
      <Grid item xs={12} sm={6} md={3} lg={3} mb={3} key={`transaction_${key}`}>
        <Tile
          icon={tile.icon}
          color={tile.color}
          title={tile.title}
          amount={tile.amount}
          amountDataType={tile.amountDataType}
          percentage={tile.percentage}
          comparedTo={tile.comparedTo}
        />
      </Grid>
    );
  });
  return (
    <MDBox>
      <Stack py={1}>
        <MDTypography variant="caption" fontWeight="medium">
          Transactions
        </MDTypography>
        <MDBox py={3}>
          <Grid container spacing={1}>
            {tiles}
          </Grid>
        </MDBox>
      </Stack>
    </MDBox>
  );
}

export default Transactions;

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

// Material Dashboard 2 PRO React TS components
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

import { cellContainer, statusIcon, cellRenderedStyle } from "./styles";

// Declaring prop types for DataTableBodyCell
interface Props {
  cell: any;
  columnSubscript?: any;
  row?: any;
}

const statusIconName: any = {
  voided: "clear",
  delivered: "check",
};

function TableCell({ columnSubscript, cell, row }: Props): JSX.Element {
  const cellProps = cell.getCellProps();
  const cellRendered = cell.render("Cell");
  const rowValues = { ...row?.original };
  const id = cell.column.id;
  const isDetail = id == "details";
  const isStatus = id == "status";
  const isType = id == "type";

  const shrink = isStatus || isDetail;

  return (
    <Grid
      item
      align={cell.column.align ? cell.column.align : "left"}
      {...cellProps}
      sx={(theme: any) => cellContainer(theme, shrink, isStatus, isType)}
      xs={shrink ? 2 : isType ? 10 : 5}
      sm={shrink ? 1 : isType ? 11 : 5}
      md={shrink ? 1 : 3}
    >
      {!isDetail && (
        <Stack alignItems={shrink ? "center" : "left"}>
          {isStatus && (
            <Icon sx={() => statusIcon(cell.value)} fontSize="small">
              {statusIconName[cell.value] || "info-outlined"}
            </Icon>
          )}
          <Grid item sx={(theme: any) => cellRenderedStyle(theme, shrink)}>
            {cellRendered}
          </Grid>
          {!shrink && columnSubscript[id] && (
            <Grid item sx={{ lineHeight: 0.5 }}>
              <MDTypography variant="caption">{rowValues[columnSubscript[id]]}</MDTypography>
            </Grid>
          )}
        </Stack>
      )}
      {isDetail && (
        <Grid item sx={shrink ? { textAlign: "center" } : {}}>
          <Link onClick={() => {}}>
            <MDTypography
              variant="caption"
              sx={{ cursor: "pointer", textDecoration: "underline !important" }}
            >
              Details
            </MDTypography>
          </Link>
        </Grid>
      )}
    </Grid>
  );
}

// Declaring default props for TableCell
TableCell.defaultProps = {
  noBorder: false,
  align: "left",
};

export default TableCell;

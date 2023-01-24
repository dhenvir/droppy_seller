import { Theme } from "@mui/material/styles";
const rowStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  border: "0.5px solid #4A5157",
  margin: "auto",
  borderRadius: "12px",
};

const cellContainer = (theme: Theme, shrink: boolean, isStatus: boolean, isType: boolean) => {
  const { breakpoints } = theme;
  return {
    alignSelf: isStatus ? "end" : "center",
    ...(shrink ? { textAlign: "center", display: "flex" } : {}),
    [breakpoints.down("lg")]: {
      ...(shrink ? { fontSize: "small" } : {}),
    },
    [breakpoints.down("sm")]: {
      ...(shrink ? { fontSize: "x-small", ...(isStatus ? { alignSelf: "center" } : {}) } : {}),
    },
  };
};

const statusIcon = (status: any) => {
  return {
    textAlign: "center",
    color: statusColors[status] || "#000000",
  };
};

const statusColors: any = {
  voided: "#E04E3A",
  delivered: "#3AFF42",
};

const cellRenderedStyle = (theme: Theme, shrink: any) => {
  const { breakpoints } = theme;
  return {
    ...(shrink ? { textAlign: "center" } : {}),
    [breakpoints.down("md")]: {
      fontSize: "smaller",
    },
  };
};

const headerContainer = (theme: Theme) => {
  const { breakpoints } = theme;
  return {
    [breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  };
};

const searchContainer = (theme: Theme) => {
  const { breakpoints } = theme;
  return {
    [breakpoints.down("sm")]: {
      width: "100%",
    },
  };
};

const sortIcon = {
  background: "#F0F1F5",
  marginLeft: "0.25rem",
  boxShadow: "1px 0px 3px rgb(0 0 0 / 25%)",
};

export {
  rowStyle,
  cellContainer,
  statusIcon,
  cellRenderedStyle,
  headerContainer,
  searchContainer,
  sortIcon,
};

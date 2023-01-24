import { Theme } from "@mui/material/styles";
const buttonOnTableHeaderContainer = (theme: Theme) => {
  const { breakpoints } = theme;

  return {
    [breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "0.5rem",
    },
  };
};

export { buttonOnTableHeaderContainer };

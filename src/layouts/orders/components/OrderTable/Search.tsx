import { useState } from "react";
import { useAsyncDebounce } from "react-table";

import MDBox from "components/MDBox";
import { MenuItem, Menu, Icon } from "@mui/material";

import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import { sortIcon, searchContainer } from "./styles";

import { unslug } from "utils/Utils";

function Search({ setGlobalFilter, isSorted, searchColumns }: any): JSX.Element {
  const setSortedValue = (column: any) => {
    let sortedValue;

    if (isSorted && column.isSorted) {
      sortedValue = column.isSortedDesc ? "desc" : "asce";
    } else if (isSorted) {
      sortedValue = "none";
    } else {
      sortedValue = false;
    }

    return sortedValue;
  };
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  const [menu, setMenu] = useState(null);

  const openMenu = (event: any) => setMenu(event.currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      anchorEl={menu}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={Boolean(menu)}
      onClose={closeMenu}
      keepMounted
    >
      {searchColumns.map((column: any, key: any) => (
        <MenuItem
          key={key}
          onClick={() => {
            setSearchBy(column);
            closeMenu();
            onSearchChange(search, column);
          }}
        >
          {unslug(column, "_")}
        </MenuItem>
      ))}
    </Menu>
  );
  // Search input state handle
  const onSearchChange = useAsyncDebounce((value: any, column: any) => {
    setGlobalFilter({ column, value });
  }, 100);

  return (
    <MDBox display="flex" alignItems="center" ml="auto" sx={searchContainer}>
      <MDButton variant="contained" mr={1} color="white" onClick={openMenu}>
        {unslug(searchBy, "_")}&nbsp;
        <Icon>keyboard_arrow_down</Icon>
      </MDButton>
      {renderMenu}
      <MDInput
        placeholder="Search..."
        value={search}
        size="small"
        fullWidth
        onChange={({ currentTarget }: any) => {
          setSearch(currentTarget.value);
          onSearchChange(currentTarget.value, searchBy);
        }}
      />
      <MDButton variant="gradient" color="white" iconOnly sx={sortIcon}>
        <Icon fontSize="medium">sort-outlined</Icon>
      </MDButton>
    </MDBox>
  );
}
export default Search;

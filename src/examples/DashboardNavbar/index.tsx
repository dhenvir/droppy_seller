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

import { useState, useEffect } from "react";

// react-router components
import { useNavigate } from "react-router-dom";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";

// Material Dashboard 2 PRO React TS examples components
import MenuItem from "examples/MenuItem";

//sample profile piciture
import avatar from "assets/images/sample-profile.jpg";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarDesktopMenu,
} from "examples/DashboardNavbar/styles";

// Material Dashboard 2 PRO React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";
import { pesoFormat } from "utils/Utils";
import MDButton from "components/MDButton";

// Declaring prop types for DashboardNavbar
interface Props {
  absolute?: boolean;
  light?: boolean;
  isMini?: boolean;
}

function DashboardNavbar({ absolute, light, isMini }: Props): JSX.Element {
  const [navbarType, setNavbarType] = useState<
    "fixed" | "absolute" | "relative" | "static" | "sticky"
  >();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState<any>(false);
  const navigate = useNavigate();
  const COINS_AMOUNT = 0;

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleOpenMenu = (event: any) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  const handleConfiguratorOpen = () => {
    setOpenConfigurator(dispatch, !openConfigurator);
    setOpenMenu(false);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("ProductListData");
    navigate("/SignIn");
  };

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <MenuItem
        icon={<Icon>person</Icon>}
        title="My Profile"
        onClick={() => navigate("/seller/Profile")}
      />
      <MenuItem
        icon={<Icon>notifications</Icon>}
        title="Notifications"
        onClick={() => navigate("/seller/Notifications")}
      />
      <MenuItem
        icon={<Icon>settings</Icon>}
        title="Settings"
        onClick={() => navigate("/seller/Settings")}
      />
      <MenuItem icon={<Icon>color_lens</Icon>} title="Theme" onClick={handleConfiguratorOpen} />
      <MenuItem icon={<Icon>logout</Icon>} title="Log out" onClick={logout} />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({
    palette: { dark, white, text },
    functions: { rgba },
  }: {
    palette: any;
    functions: any;
  }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={navbarContainer}>
        <MDBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <IconButton sx={navbarDesktopMenu} onClick={handleMiniSidenav} size="small" disableRipple>
            <Icon fontSize="medium" sx={iconsStyle}>
              {miniSidenav ? "menu_open" : "menu"}
            </Icon>
          </IconButton>
        </MDBox>
        <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
          <MDBox sx={{ color: "#0B2658", px: 1 }}>{pesoFormat(COINS_AMOUNT)}</MDBox>
          <MDButton
            variant="outlined"
            color="dark"
            iconOnly
            size="small"
            sx={{ borderRadius: "20px", mx: 1, p: "16px" }}
            onClick={() => {
              navigate("/seller/wallet/add-coin");
            }}
          >
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          </MDButton>
          <MDBox color={light ? "white" : "inherit"}>
            <IconButton size="small" color="inherit" sx={navbarIconButton} onClick={handleOpenMenu}>
              <MDAvatar src={avatar} alt="Avatar" size="sm" />
            </IconButton>
            {renderMenu()}
          </MDBox>
        </MDBox>
      </Toolbar>
    </AppBar>
  );
}

// Declaring default props for DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

export default DashboardNavbar;

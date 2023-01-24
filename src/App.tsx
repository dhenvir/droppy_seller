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

import { useState, useEffect, useMemo, JSXElementConstructor, Key, ReactElement } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Dashboard 2 PRO React TS exampless
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 PRO React TS themes
import theme from "assets/theme";

// Material Dashboard 2 PRO React TS Dark Mode themes
import themeDark from "assets/theme-dark";

// Material Dashboard 2 PRO React TS routes
import routes_seller from "routes/enterprise/seller";
import routes_dropshipper from "routes/enterprise/admin";
import routes_admin from "routes/enterprise/admin";

//Auth pages
import Signin from "layouts/auth/signin";
import SignUp from "layouts/auth/signup";
import ResetPassword from "layouts/auth/resetpassword";
import Error404 from "layouts/error404";
import Error401 from "layouts/error401";
import Confirmregistration from "layouts/auth/confirmregistration";
import Auth from "layouts/auth";

// Material Dashboard 2 PRO React TS contexts
import { useMaterialUIController, setMiniSidenav } from "context";

// Images
import brandWhite from "assets/images/logos/favdrop.png";
import brandDark from "assets/images/logos/favdrop.png";

//utils
import PrivateRoutes from "utils/PrivateRoutes";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();
  const [roleroutes, setRoleroutes] = useState(routes_seller);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes: any[]): any =>
    allRoutes.map(
      (route: {
        collapse: any;
        route: string;
        component: ReactElement<any, string | JSXElementConstructor<any>>;
        key: Key;
      }) => {
        if (route.collapse) {
          return getRoutes(route.collapse);
        }

        if (route.route) {
          return <Route path={route.route} element={route.component} key={route.key} />;
        }

        return null;
      }
    );

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const role = JSON.parse(localStorage.getItem("user")).role;
      if (role == "seller") setRoleroutes(routes_seller);
      else if (role == "admin") setRoleroutes(routes_admin);
    } else {
      <Navigate to="/signin" />;
    }
  });

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Droppy"
            routes={roleroutes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
        </>
      )}
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="unauthorized" element={<Error401 />} />
        <Route path="signIn" element={<Signin />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        <Route path="Confirmregistration" element={<Confirmregistration />} />
        <Route path="/" element={<Auth />} />
        <Route element={<PrivateRoutes role="seller" />}> {getRoutes(routes_seller)} </Route>
        <Route element={<PrivateRoutes role="admin" />}> {getRoutes(routes_admin)} </Route>
        <Route element={<PrivateRoutes role="dropshipper" />}>
          {getRoutes(routes_dropshipper)}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

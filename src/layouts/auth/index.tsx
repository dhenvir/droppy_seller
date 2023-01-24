// react components
import { Navigate } from "react-router-dom";

const Auth = () => {
  if (localStorage.getItem("user")) {
    const role = JSON.parse(localStorage.getItem("user")).role;
    return <Navigate to={"/" + role + "/dashboards"} />;
  } else {
    return <Navigate to="/signin" />;
  }
};
export default Auth;

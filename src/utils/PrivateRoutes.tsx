// react components
import { Navigate, Outlet } from "react-router-dom";

// Declaring props types for MDDropzone
interface Props {
  role: string;
}

function PrivateRoutes({ role }: Props): JSX.Element {
  if (localStorage.getItem("user")) {
    const loginrole = JSON.parse(localStorage.getItem("user")).role;
    if (loginrole == role) {
      return <Outlet />;
    } else {
      return <Navigate to="/unauthorized" />;
    }
  } else {
    return <Navigate to="/signin" />;
  }
}
export default PrivateRoutes;


import { Outlet, Navigate } from "react-router-dom";


const PrivateRouter = () => {
   
    return user?.email && user?.password ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    );
};

export default PrivateRouter;

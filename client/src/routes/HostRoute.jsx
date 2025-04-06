import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import PropTypes from "prop-types";

const HostRoute = ({ children }) => {
    const [role, isLoading] = useRole()
    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    if (role === 'host') return children
    return <Navigate to='/dashboard'></Navigate>

};

export default HostRoute;
HostRoute.propTypes = {
    children: PropTypes.element,
}

/* ----------------------Mastered------------------------ */
/* ----------------------Date :03/04/2025 ------------------------ */
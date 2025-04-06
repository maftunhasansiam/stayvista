import PropTypes from 'prop-types'
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const [role, isLoading] = useRole()

    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    if (role === 'admin') return children
    return <Navigate to='/dashboard'></Navigate>
};
export default AdminRoute;
AdminRoute.propTypes = {
    children: PropTypes.element,
}

/* ----------------------Mastered------------------------ */
/* ----------------------Date :03/04/2025 ------------------------ */
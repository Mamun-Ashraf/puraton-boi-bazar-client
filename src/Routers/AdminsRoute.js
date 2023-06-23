import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading/Loading';
import useAdmin from '../Hooks/useAdmin';

const AdminsRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();
    console.log(user);

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminsRoute;
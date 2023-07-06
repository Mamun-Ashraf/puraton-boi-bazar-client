import React, { useContext } from 'react';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/Authprovider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);

    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile mt-12">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-5">
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-200 text-base-content">
                        {
                            isAdmin ?
                                <>
                                    <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                    <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                    <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                                    <li><Link to='/dashboard/reporteditems'>Reported Items</Link></li>
                                </>
                                :
                                <>
                                    {
                                        isBuyer &&
                                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                                    }

                                    {isSeller &&
                                        <>
                                            <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                                            <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                                            <li><Link to='/dashboard/mybuyers'>My Buyers</Link></li>
                                        </>
                                    }

                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
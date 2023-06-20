import React from 'react';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-200 text-base-content">
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                        <li><Link to='/dashboard/mybuyers'>My Buyers</Link></li>
                        <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
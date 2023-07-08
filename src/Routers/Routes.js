import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Signup from "../Pages/Shared/SignUp/Signup";
import Books from "../Pages/Books/Books";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../Layout/DashboardLayout";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import MyBuyers from "../Pages/Dashboard/MyBuyers/MyBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import CreateAccount from "../Pages/Shared/SignUp/CreateAccount";
import BuyersRoute from "./BuyersRoute";
import SellersRoute from "./SellersRoute";
import AdminsRoute from "./AdminsRoute";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";

const router = createBrowserRouter([
    {
        Path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><Books></Books></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://puraton-boi-bazar-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/createaccount',
                element: <CreateAccount></CreateAccount>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <BuyersRoute><MyOrders></MyOrders></BuyersRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellersRoute><AddProducts></AddProducts></SellersRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellersRoute><MyProducts></MyProducts></SellersRoute>
                // loader: () => fetch('https://puraton-boi-bazar-server.vercel.app/myProducts')
            },
            {
                path: '/dashboard/mybuyers',
                element: <SellersRoute><MyBuyers></MyBuyers></SellersRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminsRoute><AllSellers></AllSellers></AdminsRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminsRoute><AllBuyers></AllBuyers></AdminsRoute>
            },
            {
                path: '/dashboard/makeadmin',
                element: <AdminsRoute><MakeAdmin></MakeAdmin></AdminsRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminsRoute><ReportedItems></ReportedItems></AdminsRoute>
            }
        ]

    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])
export default router;
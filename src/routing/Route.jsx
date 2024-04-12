import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout"
import CreateUsers from "../crud/CreateUsers"
import Users from "../crud/Users"
import EditUsers from "../crud/EditUsers"
import NotFound from "../crud/NotFound"
import Allusers from "../crud/Allusers"
import Register from "../authentication/Register"
import Login from "../authentication/Login"
import Profile from '../crud/Profile';
import PrivateRoute from "../authentication/PrivateRoute";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                path:"/createusers",
                element:<PrivateRoute><CreateUsers/></PrivateRoute>
            },
            {
                path:"/datausers",
                element:<PrivateRoute><Users/></PrivateRoute>
            },
            {
                path:"/editusers/:id",
                element:<EditUsers/>
            },
            {
                path:"/allusers",
                element:<PrivateRoute><Allusers/></PrivateRoute>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path: '/profile', 
                element: <PrivateRoute><Profile /></PrivateRoute>, 
              },
            {
                path:"*",
                element:<NotFound/>
            },
        ]
    }
])
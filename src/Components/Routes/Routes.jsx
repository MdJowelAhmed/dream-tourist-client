import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Home from "../../Pages/HomePages/Home";
import Register from "../ShareComponents/Register";
import AllTouristsSpot from "../../Pages/AllToristsSpot/AllTouristsSpot";
import AddTourists from "../AddTourists/AddTourists";
import MyList from "../MyList/MyList";
import Login from "../ShareComponents/Login";
import ViewDetails from "../../Pages/View/ViewDetails";
import PrivateRoute from "../ShareComponents/PrivateRoute/PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader:()=>fetch('http://localhost:5000/addSpot')
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/allTourists',
            element: <AllTouristsSpot></AllTouristsSpot> ,
            loader: ()=>fetch('http://localhost:5000/addSpot')
        },
        {
            path: '/addTourists',
            element: <PrivateRoute>
              <AddTourists></AddTourists>
            </PrivateRoute> ,
        },
        {
            path: '/myList',
            element: <MyList></MyList> ,
        },
        {
            path: '/viewDetails/:id',
            element: <ViewDetails></ViewDetails> ,
            loader: ()=>fetch('http://localhost:5000/addSpot')
        },
      ]
    },
  ]);


export default router;
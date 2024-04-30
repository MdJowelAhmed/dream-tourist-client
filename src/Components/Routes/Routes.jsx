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
import ErrorPage from "../ShareComponents/ErrorPage";
import Update from "../Update/Update";
import CountryDetails from "../../Pages/HomePages/CountryDetails/CountryDetails";
import Countries from "../../Pages/HomePages/Countries";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
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
            path: '/countryDetails/:country',
            element: <CountryDetails></CountryDetails>,
            loader: ()=>fetch('http://localhost:5000/addSpot')
            // loader:({params})=>fetch(`http://localhost:5000/addSpot/${params.country}`)
        },
        {
            path: '/update/:id',
            element: <PrivateRoute>
              <Update></Update>
            </PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/addSpot/${params.id}`)
            
        },
        {
            path: '/country',
            element: <Countries></Countries>,
            loader:({params})=>fetch(`http://localhost:5000/addSpot/${params.country}`)
            
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
            element: <PrivateRoute>
              <MyList></MyList>
            </PrivateRoute> ,
            // loader: ({params})=>fetch(`http://localhost:5000/myList/${params.email}`)
            loader:()=>fetch('http://localhost:5000/addSpot')
        },
        {
            path: '/viewDetails/:id',
            element: <PrivateRoute>
              <ViewDetails></ViewDetails> 
            </PrivateRoute>,
            loader: ()=>fetch('http://localhost:5000/addSpot')
        },
      ]
    },
  ]);


export default router;
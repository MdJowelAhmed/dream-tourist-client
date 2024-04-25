import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Home from "../../Pages/HomePages/Home";
import Register from "../ShareComponents/Register";
import AllTouristsSpot from "../../Pages/AllToristsSpot/AllTouristsSpot";
import AddTourists from "../AddTourists/AddTourists";
import MyList from "../MyList/MyList";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/allTourists',
            element: <AllTouristsSpot></AllTouristsSpot> ,
        },
        {
            path: '/addTourists',
            element: <AddTourists></AddTourists> ,
        },
        {
            path: '/myList',
            element: <MyList></MyList> ,
        },
      ]
    },
  ]);


export default router;
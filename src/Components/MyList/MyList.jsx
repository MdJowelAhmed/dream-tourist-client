import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../ShareComponents/Navbar";


const MyList = () => {
    const loadedData=useLoaderData()
    const {email}=useParams()
    console.log(email)
    return (
        <div>
            <Navbar></Navbar>
            my list
        </div>
    );
};

export default MyList;
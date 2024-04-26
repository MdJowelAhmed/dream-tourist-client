import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="mx-12">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
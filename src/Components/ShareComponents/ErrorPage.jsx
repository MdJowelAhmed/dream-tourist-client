import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <div className="ml-4">
                <img className="w-96  mx-auto items-center mt-24 rounded-3xl shadow-2xl shadow-red-400 flex justify-center " src="https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png" alt="" />
            </div>
            <h2 className="text-5xl font-bold text-red-600 mt-5">Oops</h2>
            <p className="text-3xl font-semibold mt-3">Not Found this Page</p>
            <p className="mt-5">Go Back <Link to='/'><button className="btn font-bold">Home</button></Link></p>
            
        </div>
    );
};

export default ErrorPage;
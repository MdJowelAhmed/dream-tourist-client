import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
    const { user } = useContext(AuthContext)
    const navLink = <>
        <NavLink to='/' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
            <button > Home Page</button>
        </NavLink>
        <NavLink to='/allTourists' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
            <button > All Tourists Spot</button>
        </NavLink>
        <NavLink to='/addTourists' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
            <button > Add Tourists Spot</button>
        </NavLink>
        <NavLink to='/myList' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
            <button > My List</button>
        </NavLink>
    </>
    return (
        <div className=" my-6">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLink
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold text-blue-700">Dream <span className="text-[#bb1e10]">Tourists</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    <div>

                        {
                            user ? <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL || <CgProfile />} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu  dropdown-content  shadow bg-base-100 rounded-box w-40 ">
                                    <li>
                                        <button className="btn btn-sm  btn-ghost">{user?.displayName || 'user name not found'}</button>
                                        user && <li>
                    <button
                        // onClick={logOut}
                        className="btn btn-sm  btn-ghost">Logout</button>

                </li>
                                    </li>

                                </ul>
                            </div> : <div>
                                <Link to='/login'><button className="btn">Login</button></Link>
                                <Link to='/register'><button className="btn ml-3">Register</button></Link>
                            </div>
                        }


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
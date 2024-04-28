import Footer from "./Footer/Footer";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";



const Login = () => {
    const { loginUser, loginGoogle, loginGithub } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [loginError, setLoginError] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {

        // console.log(data)
        const { email, password } = data;
        if (email.length < 0) {
            setLoginError('please email ')
            return
        }
        if (password.length < 0) {
            setLoginError('password min 6 letter')
            return
        }
        // console.log(data)
        setLoginError('')
        loginUser(email, password)

            .then(result => {
                if (result.user) {
                    const user={
                        email,
                        lastLoggedAt:result.user?.metadata?.lastSignInTime
                    }
                    
                    fetch(`http://localhost:5000/user`,{
                        method: 'POST',
                        headers:{
                            'content-type': 'application/json'
                        },
                        body:JSON.stringify(user)
                    })
                    .then(res => res.json())
                    .then(data =>{
                        console.log(data)
                    })
                    Swal.fire({
                        title: "Login success!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    navigate(location?.state || "/")
                }
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }
    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    
                    Swal.fire({
                        title: "Login Success!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    navigate(location?.state || "/")
                }
            })
            .catch(error => {
                console.log(error)

            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div>

                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col">
                            <div className="text-center ">
                                <h1 className="text-5xl font-bold">Login now!</h1>

                            </div>
                            <div className="card shrink-0  lg:min-w-96  shadow-2xl bg-base-100">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                        {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                                        {errors.password && <span className="text-red-600 text-sm">{errors.Password.message}</span>}
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                        {/* <ToastContainer /> */}
                                    </div>
                                </form>
                                {
                                    loginError && <span className="text-red-500 text-center mb-3">{loginError} </span>
                                }
                                <div className="text-center mb-5">
                                    <p>Did not have account? please <span><Link to='/register' className="text-blue-600 font-semibold">Register</Link></span></p>
                                </div>
                                <div className="divider divider-accent">Login With</div>
                                <div className="">
                                    <div className="mb-4">
                                        <button onClick={() => handleSocialLogin(loginGoogle)} className="btn text-center w-1/2 mt-5 border border-red-300 ml-20 mx-auto"> <FaGoogle /> Google</button>
                                    </div>
                                    <div>
                                        <button onClick={() => handleSocialLogin(loginGithub)} className="btn text-center w-1/2 mb-5 border border-red-300 ml-20 mx-auto"><FaGithub /> Github</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
    const [showPassword,setShowPassword]=useState(false)
    const [regError,setRegError]=useState('')
    const [success,setSuccess]=useState('')

    const {createUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    // console.log(createUser)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
       
        // console.log(data)
        const { email, password} = data;
        // console.log(email,password)
        setRegError('')
        createUser(email,password)
        .then(result=>{
            // updateProfile(name,image)
           if(result.user){
            Swal.fire({
                title: "Register successFull!",
                text: "You clicked the button!",
                icon: "success"
              });
            navigate(location?.state || "/")
            setSuccess('register success')
           }
                
         })
        .catch(error=>{
            console.log(error)
            setRegError(error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            {/* register */}
        
            <div>
            
           
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register First!</h1>

                    </div>
                    <div className="card shrink-0  lg:min-w-96  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="Name" placeholder="Your Name" className="input input-bordered" {...register("Name", { required: true })} />
                                {errors.Name && <span className="text-red-600 text-sm">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="Email" placeholder="Your Email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name="image" placeholder="Image URL" className="input input-bordered" {...register("image",{ required: true })}/>
                                {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ?"text" :"password"} name="Password" placeholder="password" className="input input-bordered" {...register("password", {
                                    required: {
                                        value: true,
                                        message: "You must fill the password field"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must min 6 characters'
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                                       
                                        // value: '[A-Z]',
                                        message: 'Uppercase and lowerCase letter also number added '
                                    }
                                })} />
                                {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
                                <div onClick={()=>setShowPassword(!showPassword)} className="absolute ml-72 mt-12">
                                    {
                                       showPassword ?  <FaEye /> :  <FaEyeSlash />
                                    }
                                   
                                   
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                             
                            </div>
                        </form>
                        {
                            regError && <span className="text-red-600 text-center mb-3">{regError} </span>
                        }
                        {
                            success && <span>{toast.success('successfully')} </span>
                        }
                        <div className="text-center mb-5">
                            <p>Have you account? please <span><Link to='/login' className="text-blue-600 font-semibold">Login</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;
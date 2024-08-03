import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        navigate("/")
    }

    return (
        <div className="">
            <Navbar />

            <div className='flex h-screen md:mx-96 mx-20 justify-center flex-col md:my-10'>
                <div className="p-10 rounded-2xl border shadow-xl md:my-8">

                    <h3 className="font-bold text-xl text-center space-y-2">Sign Up</h3>

                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="md:my-5 md:mx-10 sm:mx-4">
                            <div className="">
                                <label className='name text-bold'>Name</label> <br />
                                <input 
                                    type="name" placeholder='Enter your name' 
                                    className='outline-none py-1 px-2 w-full rounded border my-2' 
                                    {...register("name", { required: true })} 
                                />
                                <br/>
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className="">
                                <label className='email text-bold'>Email</label> <br />
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    className='outline-none py-1 px-2 w-full rounded border my-2'
                                    {...register("email", { required: true })} 
                                />
                                <br/>
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className="">
                                <label className='text-bold'>Password</label> <br />
                                <input 
                                    type="password" 
                                    placeholder='Enter your password' 
                                    className='outline-none w-full py-1 px-2 rounded border my-2' 
                                    {...register("password", { required: true })} 
                                />
                                <br/>
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                        </div>

                        <div className="flex flex-col justify-around mx-3 space-y-3 md:mt-10">
                            <div className="flex justify-center items-center">
                                <button type='submit' className="bg-pink-500 py-1 w-5/6 rounded">Sign Up</button>
                            </div>
                            <div className="">
                                <p className='text-center'>Already Have Account? &nbsp;
                                    <Link className='underline text-blue-700 cursor-pointer'
                                        onClick={() => document.getElementById('my_modal_3').showModal()}
                                    > Login</Link>
                                </p>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SignUp

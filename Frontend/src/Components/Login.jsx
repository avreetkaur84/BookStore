import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';


function Login() {
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
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-xl text-center space-y-2">Login</h3>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="my-5 mx-10 sm:mx-4">
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

            <div className="flex flex-col justify-around mx-3 space-y-3">
              <div className='flex justify-center items-center'>
                  <button type='submit' 
                    className=" bg-pink-500 py-1 w-5/6 text-center rounded"
                    // onClick={() => document.getElementById('my_modal_3').close()}
                  >Login</button>
              </div>
              <div className="">
                <p className='text-center'>Not Registered? &nbsp;
                  <Link to="/signup" className='underline text-blue-700 cursor-pointer'> Sign Up</Link>
                </p>
              </div>
            </div>
          </form>

        </div>
      </dialog>
    </div>
  )
}

export default Login

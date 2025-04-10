import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-center min-h-screen bg-[#ebf0f1] '>
            <div className='shadow-lg p-9 rounded-3xl md:max-w-xl max-w-[350px] md:mt-1 mt-4  w-full bg-white'>
                <form className='mt-6 space-y-4' >
                    <div className='items-center flex flex-col'>
                        <h2 className='font-semibold mb-4 text-4xl text-black'>Colloh net</h2>
                        <hr className='w-[50px] border-b border-3 border-[#2d657e] rounded-2xl mb-4' />

                        <p className='text-gray-700 font-medium mt-3'>Welcome back! Log in to your account</p>
                        <p >Or <p onClick={() => navigate('/signup')} className='text-[#2d657e] hover:underline cursor-pointer font-semibold'>sign up for an account</p> </p>
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-2 '>Username<span className='text-red-500'>*</span> </label>
                        <input type="text" className='w-full py-2 border rounded-lg focus:outline-2  focus:ring-1 focus:outline-[#2d657e]  border-gray-200' />
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-between mb-2'>
                            <label >Password<span className='text-red-500'>*</span></label>
                            <label className='font-semibold text-[#2d657e] hover:underline cursor-pointer' >Forgot password?</label>
                        </div>

                        <div className="relative w-full">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full py-2 pl-3 pr-12 border rounded-lg focus:outline-2 focus:ring-1 focus:outline-[#2d657e] border-gray-200"
                            />
                            <div className="absolute right-1 top-0 flex items-center h-full">
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="border-l border-gray-300 p-2.5 h-full flex items-center justify-center"
                                >
                                    {showPassword ? (
                                        <IoEyeOutline className="text-gray-400 cursor-pointer" />
                                    ) : (
                                        <FiEyeOff className="text-gray-400 cursor-pointer" />
                                    )}
                                </button>
                            </div>
                        </div>




                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <input type="checkbox" className="h-4 w-4 bg-[#2d657e] rounded  accent-[#2d657e]" />
                        <p>Remember me</p>
                    </div>

                    <div className='flex items-center '>
                        <button onClick={() => navigate('/signup')} className="w-full bg-[#2d657e] cursor-pointer py-2 rounded-lg text-white transform transition-all hover:scale-103">
                            Login
                        </button>


                    </div>
                    <div className='mt-4 text-center'>
                        <p>Need help? Contact support at <span className='text-[#2d657e] font-medium line-through'>0794052875</span> </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
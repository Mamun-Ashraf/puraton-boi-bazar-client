import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import login from '../../../Assets/login.jpg';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='flex items-center'>
            <div className='w-1/2'>
                <img src={login} alt='' className='hidden md:block' />
            </div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-7  bg-green-300 rounded'>
                    <h2 className='text-xl text-center'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="text" {...register("email",
                                {
                                    required: "Email Address is required"
                                })}
                                className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'password must be at least 6 characters or longer' }
                                })}
                                className="input input-bordered w-full" />
                            {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                            <label className="label"><span className="label-text">Forget Password?</span></label>
                        </div>
                        <input className='btn w-full' value='Login' type="submit" />
                        <p>New User? <Link to='/signup' className='text-blue-500'>Register here</Link></p>
                        <div className="divider">OR</div>
                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
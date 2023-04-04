import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import login from '../../../Assets/login.jpg';

const Login = () => {

    const { register, handleSubmit } = useForm();
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
                            <input type="text" {...register("email")} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register("password")} className="input input-bordered w-full" />
                            <label className="label"><span className="label-text">Forget Password?</span></label>
                        </div>
                        <input className='btn w-full' value='Login' type="submit" />
                        <p>New User?<Link to='/signup' className='text-blue-500'>Register here</Link></p>
                        <div className="divider">OR</div>
                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
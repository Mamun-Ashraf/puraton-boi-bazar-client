import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Authprovider';

const CreateAccount = () => {

    const { handleUserType, userType } = useContext(AuthContext);

    return (
        <div className='border rounded-lg w-[700px] h-[300px] m-auto text-center'>
            <p className="text-2xl font-bold my-5">Join as a Buyer or Seller</p>

            <div className='grid grid-cols-2 gap-10 h-32 text-xl font-semibold'>
                <div className="border rounded-lg ml-5 text-center">
                    <input type="radio" name="userType"
                        id="userTypeBuyer" value="Buyer" checked={userType === "Buyer"} onChange={handleUserType} />
                    <label className='block' htmlFor="userTypeBuyer">I am a Buyer, looking for some books</label>
                </div>
                <div className="border rounded-lg mr-5">
                    <input type="radio" name="userType"
                        id="userTypeSeller" value="Seller" checked={userType === "Seller"} onChange={handleUserType} />
                    <label className='block' htmlFor="userTypeSeller">I am a Seller, seeking for buyers</label>
                </div>
            </div>

            <div>
                {
                    userType ?
                        <Link to={'/signup'}>
                            <button className="mt-5 btn btn-primary">
                                Join as a {userType}
                            </button>
                        </Link>
                        :
                        <button className='btn btn-disabled mt-5'>Create Account</button>
                }
            </div>
        </div>
    );
};

export default CreateAccount;
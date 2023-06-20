import React, { useState } from 'react';

const CreateAccount = () => {

    const [userType, setUserType] = useState('');
    const handleUserType = event => {
        const type = event.target.value;
        setUserType(type);
    }

    return (
        <div>
            <p className="text-2xl font-bold">Join as a Buyer or Seller
                <label className="mx-5 fs-6 fw-normal" htmlFor="userTypeBuyer"><input type="radio" name="userType"
                    id="userTypeBuyer" value="Buyer" checked={userType === "Buyer"} onChange={handleUserType} /> Buyer</label>
                <label className="fs-6 fw-normal" htmlFor="userTypeSeller"><input type="radio" name="userType"
                    id="userTypeSeller" value="Seller" checked={userType === "Seller"} onChange={handleUserType} /> Seller</label>
            </p>

            <div>
                {/* <button className="btn btn-primary">Button</button> */}
            </div>
        </div>
    );
};

export default CreateAccount;
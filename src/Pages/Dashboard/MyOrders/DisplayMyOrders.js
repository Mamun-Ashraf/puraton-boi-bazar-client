import React from 'react';

const DisplayMyOrders = ({ myOrder }) => {
    const { _id, bookName, authorsName, bookImage, price } = myOrder;

    const handleDeleteMyOrder = (id) => {
        fetch(`http://localhost:5000/myOrders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <h2 className="card-title pl-5">Book Name : {bookName}</h2>
            <small className="font-bold pl-5 pb-5">Authors Name : {authorsName}</small>
            <figure><img src={bookImage} alt="" className='h-24' /></figure>
            <div className="card-body">
                <div className=''>
                    <p className='text-lg'><span className='text-lg font-bold'>Original Price :</span> ${price}</p>
                </div>
                <button className='btn btn-error'
                    onClick={() => handleDeleteMyOrder(_id)}
                >Delete
                </button>

            </div>
        </div>
    );
};

export default DisplayMyOrders;
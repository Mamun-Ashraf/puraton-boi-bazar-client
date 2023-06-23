import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllSellers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['userType'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/allsellers?userType=Seller');
            const data = await res.json();
            return data;
        }
    })
    console.log(users);

    const handleDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('User deleted successfully');
                    refetch();
                }
            })
    }
    const handleVerify = id => {
        fetch(`http://localhost:5000/users/allsellers/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('User verified successfully');
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl text-center font-bold mb-5">All Sellers</h2>
            {
                users.length === 0 ?
                    <h2 className='text-3xl text-center text-success font-bold'>No sellers found !!!</h2>
                    :
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Verification Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, i) => <tr
                                        key={user._id}
                                    >
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.VerificationStatus === 'verified' ?
                                                <p className='bg-blue-600 text-center py-1 rounded-full text-white'>verified</p>
                                                :
                                                <button onClick={() => handleVerify(user._id)} className='btn btn-xs btn-primary'>Verify</button>}
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(user._id)} className='btn btn-xs btn-error'>Delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }

        </div>
    );
};

export default AllSellers;
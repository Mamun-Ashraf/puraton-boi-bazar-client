import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllBuyers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['userType'],
        queryFn: async () => {
            const res = await fetch(' https://puraton-boi-bazar-server.vercel.app/users/allbuyers?userType=Buyer ');
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {
        fetch(`https://puraton-boi-bazar-server.vercel.app/users/${id}`, {
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

    return (
        <div>
            <h2 className="text-3xl text-center font-bold mb-5">All Buyers</h2>
            {
                users.length === 0 ?
                    <h2 className='text-3xl text-center text-success font-bold'>No buyers found !!!</h2>
                    :
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
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
                                        <td><button onClick={() => handleDelete(user._id)} className='btn btn-xs btn-error'>Delete</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }

        </div>
    );
};

export default AllBuyers;
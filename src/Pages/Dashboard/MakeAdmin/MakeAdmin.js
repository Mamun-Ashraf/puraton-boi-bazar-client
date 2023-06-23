import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const MakeAdmin = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(' http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successfully');
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl text-center font-bold mb-5">Make Admin</h2>
            {
                users.length === 0 ?
                    <h2 className='text-3xl text-center text-success font-bold'>No users found !!!</h2>
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
                                        <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-success'>Make Admin</button>}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }

        </div>
    );
};

export default MakeAdmin;
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Authprovider';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import DisplayMyOrders from './DisplayMyOrders';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const { data: myOrders = [], isLoading } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myOrders/${user.email}`);
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='grid grid-cols-3 gap-12'>

            {

                myOrders.map(myOrder => <DisplayMyOrders
                    key={myOrder._id}
                    myOrder={myOrder}
                ></DisplayMyOrders>
                )
            }
        </div>
    );
};

export default MyOrders;
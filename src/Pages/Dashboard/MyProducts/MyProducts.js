import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Contexts/Authprovider';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const { data: myProducts = [], isLoading } = useForm({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts/${user.email}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="3xl">My Products</h2>

            {
                myProducts.map(myProduct => <div
                    key={myProduct._id}
                >
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyProducts;
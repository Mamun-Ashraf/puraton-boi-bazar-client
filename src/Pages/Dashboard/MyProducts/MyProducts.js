import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Authprovider';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const { data: myProducts = [], isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch('https://puraton-boi-bazar-server.vercel.app/myProducts');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-5/6 mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>

            {

                myProducts.map((myProduct, index) => {
                    const myBooks = myProduct.categoryBooks;
                    const displayedMyBooks = myBooks.filter(myBook => myBook.sellersEmail === user.email);
                    return displayedMyBooks.map((displayedMyBook, index) => <div key={index} className="card card-compact bg-base-100 shadow-xl">
                        <h2 className="card-title pl-5">Book Name : {displayedMyBook.bookName}</h2>
                        <small className="font-bold pl-5 pb-5">Authors Name : {displayedMyBook.authorsName}</small>
                        <figure><img src={displayedMyBook.bookImage} alt="" className='h-24' /></figure>
                        <div className="card-body">
                            <div className=''>
                                <p className='text-lg'><span className='text-lg font-bold'>Original Price :</span> ${displayedMyBook.originalPrice}</p>
                                <p className='text-lg'><span className='text-lg font-bold'>Resale Price :</span> ${displayedMyBook.resalePrice}</p>
                                <p className='text-lg'><span className='text-lg font-bold'>Book Condition :</span> {displayedMyBook.conditiontype}</p>
                                <p className='text-lg'><span className='text-lg font-bold'>Years of Use :</span> {displayedMyBook.usingYears}</p>
                            </div>
                            <div className="card-actions justify-center">
                                <label
                                    htmlFor="buying-modal"
                                    className="btn btn-error"
                                // onClick={() => handleDeleteMyProduct(_id)}
                                >Delete</label>
                            </div>
                        </div>
                    </div>)
                })
            }
        </div>
    );
};

export default MyProducts;
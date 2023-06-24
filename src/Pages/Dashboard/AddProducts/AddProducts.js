import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [addBookError, setAddBookError] = useState('');


    const navigate = useNavigate();

    const handleAddBook = data => {
        const { bookname, originalprice, resaleprice, conditiontype, mobilenumber, location, category, description, purchaseyear, sellersname } = data;

        fetch(`http://localhost:5000/categoryBook/${category}`)
            .then(res => res.json())
            .then(data => {
                const bookApi = data.categoryBooks;
                const bookCategories = {
                    bookName: bookname,
                    bookImage: "",
                    sellersName: sellersname,
                    sellersLocation: location,
                    resalePrice: resaleprice,
                    originalPrice: originalprice,
                    usingYears: purchaseyear,
                    postingTime: "",
                    conditiontype,
                    mobilenumber,
                    description
                }

                setAddBookError('');

                fetch(`http://localhost:5000/category/${category}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify([...bookApi, bookCategories])
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate('/dashboard/myproducts');
                    })

                    .catch(error => {
                        setAddBookError(error.message);

                    });
            })

            .catch(error => console.error(error));
    }

    return (
        <div>

            <div className=' flex justify-center '>
                <div className='w-2/3 p-7  bg-gray-200 rounded'>
                    <h2 className='text-xl text-center'>Add a book</h2>

                    <form onSubmit={handleSubmit(handleAddBook)}>

                        <div className="form-control w-full">
                            <input type="text" {...register("bookname",
                                {
                                    required: "Book name is required"
                                })}
                                className="input input-bordered text-center mt-2 w-full" placeholder='Book Name' />
                            {errors.bookname && <p className='text-red-500' role="alert">{errors.bookname?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <input type="text" {...register("sellersname",
                                {
                                    required: "Sellers name is required"
                                })}
                                className="input input-bordered text-center mt-2 w-full" placeholder='Sellers Name' />
                            {errors.sellersname && <p className='text-red-500' role="alert">{errors.sellersname?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <input type="number" {...register("originalprice",
                                {
                                    required: "Original Price is required"
                                })}
                                className="input input-bordered text-center mt-2 w-full" placeholder='Original Price' />
                            {errors.originalprice && <p className='text-red-500' role="alert">{errors.originalprice?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <input type="number" {...register("resaleprice",
                                {
                                    required: "Resale Price is required"
                                })}
                                className="input input-bordered text-center mt-2 w-full" placeholder='Resale Price' />
                            {errors.resaleprice && <p className='text-red-500' role="alert">{errors.resaleprice?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <input type="text" {...register("conditiontype",
                                {
                                    required: "Condition type is required"
                                })}
                                className="input input-bordered text-center mt-2 w-full" placeholder='Condition Type' />
                            {errors.conditiontype && <p className='text-red-500' role="alert">{errors.conditiontype?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <input type="number" {...register("mobilenumber",
                                {
                                    required: "Mobile Number is required"
                                })}
                                className="input input-bordered text-center mt-2 w-full" placeholder='Mobile Number' />
                            {errors.mobilenumber && <p className='text-red-500' role="alert">{errors.mobilenumber?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <input type="text" {...register("location",
                                {
                                    required: "Location is required"
                                })}
                                className="input input-bordered text-center mt-2 w-full" placeholder='Location' />
                            {errors.location && <p className='text-red-500' role="alert">{errors.location?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <input type="text" {...register("category",
                                {
                                    required: "Category is required"
                                })}
                                className="input input-bordered text-center mt-2 w-full" placeholder='Category' />
                            {errors.category && <p className='text-red-500' role="alert">{errors.category?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <input type="text" {...register("description",
                                {
                                    required: "Description is required"
                                })}
                                className="input input-bordered text-center mt-2 w-full" placeholder='Description' />
                            {errors.description && <p className='text-red-500' role="alert">{errors.description?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <input type="number" {...register("purchaseyear",
                                {
                                    required: "Purchase Year is required"
                                })}
                                className="input input-bordered text-center mt-2 w-full" placeholder='Purchase Year' />
                            {errors.purchaseyear && <p className='text-red-500' role="alert">{errors.purchaseyear?.message}</p>}
                        </div>

                        <input className='btn w-full mt-5' value='Add Book' type="submit" />

                        <div>
                            {addBookError && <p className='text-red-500'>{addBookError}</p>}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
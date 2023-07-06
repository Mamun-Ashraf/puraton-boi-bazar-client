import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Authprovider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';

const AddProducts = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [addBookError, setAddBookError] = useState('');
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: categoriesTitle = [], isLoading } = useQuery({
        queryKey: ['categoryTitle'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoryTitle');
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    const handleAddBook = data => {

        const { bookname, authorsname, originalprice, resaleprice, conditiontype, mobilenumber, location, category, description, purchaseyear, sellersname, email } = data;

        const image = data.bookImage[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const bookCategories = {
                        bookName: bookname,
                        authorsName: authorsname,
                        bookImage: imgData.data.url,
                        sellersName: sellersname,
                        sellersEmail: email,
                        sellersLocation: location,
                        resalePrice: resaleprice,
                        originalPrice: originalprice,
                        usingYears: purchaseyear,
                        postingTime: "",
                        conditiontype,
                        mobilenumber,
                        description
                    }
                    fetch(`http://localhost:5000/categoryBook/${category}`)
                        .then(res => res.json())
                        .then(result => {
                            const bookApi = result.categoryBooks;
                            fetch(`http://localhost:5000/category/${category}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify([...bookApi, bookCategories])
                            })
                                .then(res => res.json())
                                .then(data => {
                                    toast.success('Book added successfully');
                                    navigate('/dashboard/myproducts');
                                })

                                .catch(error => {
                                    setAddBookError(error.message);

                                });
                        })

                }
            })
            .catch(error => console.error(error));
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div className=' flex justify-center '>
                <div className='w-5/6 mx-auto md:w-2/3 p-7  bg-gray-200 rounded'>
                    <h2 className='text-xl text-center'>Add a book</h2>

                    <form onSubmit={handleSubmit(handleAddBook)}>

                        <div className="form-control w-full">
                            <input type="text" {...register("bookname",
                                {
                                    required: "Book name is required"
                                })}
                                className="input input-bordered text-center mt-2" placeholder='Book Name' />
                            {errors.bookname && <p className='text-red-500' role="alert">{errors.bookname?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <input type="text" {...register("authorsname",
                                {
                                    required: "Authors name is required"
                                })}
                                className="input input-bordered text-center mt-2" placeholder='Authors Name' />
                            {errors.authorname && <p className='text-red-500' role="alert">{errors.authorname?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <input type="text" value={displayName}  {...register("sellersname")}
                                className="input input-bordered text-center mt-2" />
                        </div>
                        <div className="form-control w-full">
                            <input type="email" value={email} {...register("email")}
                                className="input input-bordered text-center mt-2" />
                        </div>

                        <div className="form-control w-full">
                            <input type="number" {...register("originalprice",
                                {
                                    required: "Original Price is required"
                                })}
                                className="input input-bordered text-center mt-2" placeholder='Original Price' />
                            {errors.originalprice && <p className='text-red-500' role="alert">{errors.originalprice?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <input type="number" {...register("resaleprice",
                                {
                                    required: "Resale Price is required"
                                })}
                                className="input input-bordered text-center mt-2" placeholder='Resale Price' />
                            {errors.resaleprice && <p className='text-red-500' role="alert">{errors.resaleprice?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <select {...register("conditiontype")} className="select input-bordered mt-2 text-center">
                                <option defaultValue='Excsllent'>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <input type="number" {...register("mobilenumber",
                                {
                                    required: "Mobile Number is required"
                                })}
                                className="input input-bordered text-center mt-2" placeholder='Mobile Number' />
                            {errors.mobilenumber && <p className='text-red-500' role="alert">{errors.mobilenumber?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <input type="text" {...register("location",
                                {
                                    required: "Location is required"
                                })}
                                className="input input-bordered text-center mt-2" placeholder='Location' />
                            {errors.location && <p className='text-red-500' role="alert">{errors.location?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <select {...register("category")} className="select input-bordered text-center">
                                {
                                    categoriesTitle.map(categoryTitle => <option
                                        key={categoryTitle._id}
                                        value={categoryTitle.categoryName}
                                    >{categoryTitle.categoryName}</option>)
                                }
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <input type="text" {...register("description",
                                {
                                    required: "Description is required"
                                })}
                                className="input input-bordered text-center mt-2" placeholder='Description' />
                            {errors.description && <p className='text-red-500' role="alert">{errors.description?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <input type="number" {...register("purchaseyear",
                                {
                                    required: "Purchase Year is required"
                                })}
                                className="input input-bordered text-center mt-2" placeholder='Purchase Year' />
                            {errors.purchaseyear && <p className='text-red-500' role="alert">{errors.purchaseyear?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <input type="file" {...register("bookImage",
                                {
                                    required: "Book photo is required"
                                })}
                                className="input input-bordered text-center mt-2" />
                            {errors.bookImage && <p className='text-red-500' role="alert">{errors.bookImage?.message}</p>}
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
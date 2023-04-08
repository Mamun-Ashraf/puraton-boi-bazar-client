import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Authprovider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ bookItems, setBookItems }) => {
    const { bookName, originalPrice } = bookItems;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const bookName = form.bookName.value;
        const price = form.price.value;
        const userName = form.userName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const location = form.location.value;

        const bookings = {
            bookName,
            price,
            userName,
            phone,
            email,
            location
        }

        console.log(bookings);
        setBookItems(null);
        toast.success('booking confirmed')

    }
    return (
        <>
            <input type="checkbox" id="buying-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="buying-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" name='bookName' disabled value={`Book Name: ${bookName}`} className="input input-bordered w-full font-bold text-lg" />
                        <input type="text" name='price' disabled value={`Price: $${originalPrice}`} className="input input-bordered w-full" />
                        <input type="text" name='userName' disabled defaultValue={user?.displayName} className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder='Your Phone number' className="input input-bordered w-full" />
                        <input type="email" name='email' disabled defaultValue={user?.email} placeholder='Your Email' className="input input-bordered w-full" />
                        <input type="text" name='location' placeholder='Your location' className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className='btn' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
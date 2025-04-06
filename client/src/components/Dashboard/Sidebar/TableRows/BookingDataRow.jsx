import { format } from 'date-fns'
import PropTypes from 'prop-types'
import { useState } from 'react'


import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import DeleteModal from '../../../Modal/DeleteModal'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'

const BookingDataRow = ({ booking, refetch }) => {
  console.log(booking);
  const axiosSecure = useAxiosSecure()
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }
  //   delete
  const { mutateAsync } = useMutation({
    mutationFn: async id => {
      const { data } = await axiosSecure.delete(`/booking/${id}`)
      return data
    },
    onSuccess: async data => {
      console.log(data)
      refetch()
      toast.success('Booking Canceled')
      //   Change Room booked status back to false
      await axiosSecure.patch(`/room/status/${booking?.roomId}`, {
        status: false,
      })
    },
  })
  //  Handle Delete
  const handleDelete = async id => {
    console.log(id)
    try {
      await mutateAsync(id)
    } catch (err) {
      console.log(err)
    }
  }
  console.log('Booking data:', booking);
  console.log('From date:', booking?.from);
  console.log('To date:', booking?.to);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'; // Handle undefined or null dates
    try {
        return format(new Date(dateString), 'PP'); // Use 'PP' for locale-sensitive date format
    } catch (error) {
        console.error('Error formatting date:', error);
        return 'Invalid Date';
    }
};
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={booking?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{booking?.title}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={booking?.guest?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
              {booking?.guest?.name || "Guest name Invalid"}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${booking?.price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
        {formatDate(booking?.from)}
          
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
        {formatDate(booking?.to)}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Cancel</span>

          
        </button>
        
        {/* Delete Modal */}
        <DeleteModal
          handleDelete={handleDelete}
          closeModal={closeModal}
          isOpen={isOpen}
          id={booking?._id}
        />
      </td>
    </tr>
  )
}

BookingDataRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
}






export default BookingDataRow
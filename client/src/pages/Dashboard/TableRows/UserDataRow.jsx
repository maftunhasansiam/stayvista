/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import UpdateUserModal from '../../../components/Modal/UpdateUserModal'
import { useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import toast from 'react-hot-toast'
const UserDataRow = ({ user, refetch }) => {

  const { user: logggedInUser } = useAuth()
  const axiosSecure = useAxiosSecure()
  const [isOpen, setIsOpen] = useState(false);

  // function for fetching user update data 
  const { mutateAsync } = useMutation({
    mutationFn: async role => {
      const { data } = await axiosSecure.patch(`/users/update/${user?.email}`, role)
      return data;
    },
    onSuccess: (data) => {
      refetch()
      console.log(data)
      toast.success('User role update successfully ')
      setIsOpen(false)
    }
  })
  // Modal handler 
  const modalHandler = async selected => {
    if(logggedInUser?.email === user?.email) return toast.error('Admin cant change own Role:(')
    const roleData = {
      role: selected,
      status: 'Verified'
    }
    try {
      await mutateAsync(roleData);
    } catch (error) {
      toast.error("Not updated user role")
      console.log(error)
    }



    console.log('Update user modal clicked')
  }




  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.status ? (
          <p
            className={`${user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
              } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update Role</span>
        </button>
        {/* Update User Modal */}
        <UpdateUserModal
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          modalHandler={modalHandler}
          user={user}
        ></UpdateUserModal>
      </td>
    </tr>
  )
}

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
}

export default UserDataRow
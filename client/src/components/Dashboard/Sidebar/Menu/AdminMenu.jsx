import { FaUserCog } from 'react-icons/fa'
import MenuItems from './MenuItems'
import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork } from 'react-icons/md'


const AdminMenu = () => {
  return (
    <>
      <MenuItems icon={FaUserCog} label='Manage Users' address='manage-users' />

      <MenuItems icon={BsFillHouseAddFill} label='Add Room' address='add-room' />
            <MenuItems icon={MdHomeWork} label='My Listings' address='my-listings' />
    </>
  )
}

export default AdminMenu
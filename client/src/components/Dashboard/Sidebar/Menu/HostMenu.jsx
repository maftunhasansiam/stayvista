
import { Bs0Circle, BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork } from 'react-icons/md'
import MenuItems from './MenuItems'

const HostMenu = () => {
  return (
    <>
      <MenuItems icon={BsFillHouseAddFill} label='Add Room' address='add-room' />
      <MenuItems icon={MdHomeWork} label='My Listings' address='my-listings' />
      <MenuItems icon={Bs0Circle} label='Manage Bookings' address='manage-bookings' />
    </>
  )
}

export default HostMenu
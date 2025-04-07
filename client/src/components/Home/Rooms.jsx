/* eslint-disable no-unused-vars */

// Importing the Card component to display individual room cards
import Card from './Card'

// Reusable layout wrapper component for consistent page padding and spacing
import Container from '../Shared/Container'

// Heading component used to display messages when no rooms found
import Heading from '../Shared/Heading'

// Spinner shown while data is loading
import LoadingSpinner from '../Shared/LoadingSpinner'

// React Query hook to fetch and manage data
import { useQuery } from '@tanstack/react-query'

// Custom Axios hook for making HTTP requests without auth headers
import useAxiosSecure from '../../hooks/useAxiosSecure'

// React Router hook to get query params from the URL
import { useSearchParams } from 'react-router-dom'

// Custom Axios hook for common (non-authenticated) requests
import useAxiosCommon from '../../hooks/useAxiosCommon'

const Rooms = () => {


  const axiosCommon = useAxiosCommon();
  
  const [params, setParams] = useSearchParams()// Get URL search parameters and a setter function (not used here)
  const category = params.get('category')// Get the 'category' value from the URL, e.g., ?category=beach
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ['rooms', category],// Unique key to cache and refetch when 'category' changes
    queryFn: async () => {// Fetch rooms from the backend based on selected category
      const { data } = await axiosCommon.get(`/rooms?category=${category}`);
      return data;
    }
  })

 
  if (isLoading) return <LoadingSpinner />


  return (
    <Container>
      {/* If rooms are available, display them in a responsive grid */}
      {rooms && rooms.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {rooms.map(room => (
            // Render a Card component for each room
            <Card key={room._id} room={room} />
          ))}
        </div>
      ) : (
        // If no rooms found, show a friendly message
        <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
          <Heading
            center={true}
            title='No Rooms Available In This Category!'
            subtitle='Please Select Other Categories.'
          />
        </div>
      )}
    </Container>
  )
}

export default Rooms
/* ----------------------Mastered------------------------ */
/* ----------------------Date :07/04/2025 ------------------------ */
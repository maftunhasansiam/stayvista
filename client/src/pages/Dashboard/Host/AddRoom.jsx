/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utility";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const AddRoom = () => {
    const navigate = useNavigate()
    const { user } = useAuth();
    const [loading, setLoading] = useState(false)
    const [imagePreview, setImagePreview] = useState();
    const axiosSecure = useAxiosSecure();
 
    // const [imagetext, setImageText] = useState('Upload Image');

    const [dates, setDates] = useState(
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    )
    // Date range handler
    const handleDates = item => {
        console.log(item);
        setDates(item.selection);
    }
    // create a mutation for uploading form data
    const { mutateAsync } = useMutation({
        mutationFn: async (roomData) => {
            const { data } = await axiosSecure.post(`/room`, roomData);
            return data;
        },
        onSuccess: () => {
            console.log('Room added successfully')
            toast.success('Room added Successfully!')
            navigate('/dashboard/my-listings')
            setLoading(false)
        }
    })




    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const description = form.description.value;
        const price = form.price.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const guest = form.guest.value;
        const bathrooms = form.bathrooms.value;
        const bedrooms = form.bedrooms.value;
        const image = form.image.files[0];
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }

        try {
            const image_url = await imageUpload(image);

            const roomData = {
                location, category,
                title, description,
                price, to,
                from, guest,
                bathrooms, bedrooms,
                image: image_url, host,
            }
            console.log(roomData);
            //    call the mutation to pass this data to the server
            const data = await mutateAsync(roomData);
            console.log(data);

        } catch (error) {
            console.log(error);
            setLoading(false)
            toast.error(error.message, ': Room Doesnt Added')

        }

    }
    return (
        <div>
            <h1>Add Room Page...</h1>
            {imagePreview && <img className="h-40 w-100" src={imagePreview} alt='preview' />}
            <AddRoomForm dates={dates}
                setImagePreview={setImagePreview}
                handleDates={handleDates}
                handleSubmit={handleSubmit}
                loading={loading}
            ></AddRoomForm>
        </div>
    );
};

export default AddRoom;
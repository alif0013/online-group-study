import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const UpdateAsignment = () => {

    const  asignments = useLoaderData()

    const {_id, title, description,email, marks, due, level, photo} = asignments;

    const { user } = useContext(AuthContext)
    const [selectedLevel, setSelectedLevel] = useState('');


    const handleUpdateProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const due = form.due.value;
        const email = user.email;  //AuthContext theke asa user email
        const level = selectedLevel; // Use the selectedLevel from state
        const photo = form.photo.value;

        const updatedAsignment = { title, description,email, marks, due, level, photo }
        console.log(updatedAsignment);

           // send data to the server
           fetch(`https://online-group-study-server-l5x89tp06-alif0013s-projects.vercel.app/asignments/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedAsignment)

           })
           .then(res => res.json())
           .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Asignment Updated Successfully!')
            }
           })





    }


    const handleLevelChange = e => {
        setSelectedLevel(e.target.value); // Update selectedLevel state when the select value changes
    };

    return (
         <div className='md:w-[1200px] text-center p-20 md:mx-auto bg-[#F4F3F0] mt-10'>

            <div className='text-center'>
                <h1 className='text-5xl mb-5'>Update An Asignment</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout.</p>

            </div>

            <form onSubmit={handleUpdateProduct}>
                <div className='mt-3'>
                    <input type="text" name='title'  defaultValue={title} placeholder="Title" className="input input-bordered w-full max-w-xs mr-5 mb-3" />
                    <input type="text" name='description'  defaultValue={description} placeholder="Description" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className='mt-3'>
                    <input type="text" name='marks' defaultValue={marks} placeholder="Marks" className="input input-bordered w-full max-w-xs mr-5 mb-3" />
                    <input type="date" name='due' defaultValue={due}  placeholder="Due Date" className="input input-bordered w-full max-w-xs" />

                 
                    {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                
                </div>
                <div className='mt-3'>
                    {/* <input type="text" name='level' placeholder="Easy, Medium, Hard" className="input input-bordered w-full max-w-xs mr-5 mb-3" /> */}
                    <select
                        className="select input select-bordered w-full max-w-xs mr-5"
                        onChange={handleLevelChange} // Handle select change
                        value={selectedLevel} // Set the selected value from state
                    >
                        <option value="" disabled selected>Select level</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>



                    <input type="text" name='photo' defaultValue={photo}  placeholder="photo url" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className='mt-3'>

                </div>

                <button type='submit' className="btn md:w-[660px] text-white text-center bg-gradient-to-r from-[#4A00E0] to-blue-500 mt-6">Update Asignment</button>


            </form>


        </div>
    );
};

export default UpdateAsignment;
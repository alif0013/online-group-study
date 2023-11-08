import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const ViewAsignment = () => {
    const { user } = useContext(AuthContext)
    const userEmail = user.email;  
    const asignments = useLoaderData()

    const { _id, title, photo, description, marks, level, due, email } = asignments;

    const handleTakeAsignment = () =>{
        // send data to the server
        fetch('http://localhost:5000/myAsignments',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(asignments)

           })
           .then(res => res.json())
           .then(data =>{
            console.log(data);
            if(data.insertedId){
                toast.success('Asignment added Successfully!')
            }
           })


}
    
    return (
        <div className='px-5'>
            <div className='mt-16 md:w-[500px] mx-auto border shadow-md mb-20'>
                <div className="card bg-base-100">
                    <figure><img className='md:h-[180px]' src={photo} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className='flex justify-between'>
                            <p>Marks: {marks}</p>
                            <p>Level: {level}</p>
                        </div>
                        <div>
                            <p>Due Date: {due}</p>
                        </div>

                        <p>{description}</p>

                        <div className="card-actions justify-center">

                          <Link to='/submit'>  <button onClick={handleTakeAsignment} className="px-8 mt-5 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Take Asignment</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAsignment;
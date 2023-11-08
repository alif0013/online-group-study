import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Asignments = () => {

    const loadedAsignments = useLoaderData()
    const [deleteAsignments, setDeleteAsignment] = useState(loadedAsignments);

    const handledelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://online-group-study-server-l5x89tp06-alif0013s-projects.vercel.app/asignments/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Asignment has been deleted.',
                                'success'
                            )
            const remaining = deleteAsignments.filter(deleteAsignment => deleteAsignment._id !== id)
                            setDeleteAsignment(remaining)
                        }
                    })


            }
        })
    }


    return (
        <div>
            <div className='my-10 font-bold text-center'>
                <h1 className='text-2xl md:text-4xl'>All Asignment</h1>
            </div>

            <div className='text-center md:flex justify-between'>
                <div className='my-10 font-bold'>
                    <h1 className='text-xl md:text-2xl'>Total Asignments: {loadedAsignments.length}</h1>
                </div>


                <div className='my-10'>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Asignment Level</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </div>
            </div>


            <div className='grid px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {/* {
                asignments.map(asignment => <AsignmentCard key={asignment._id} asignment={asignment}></AsignmentCard>)
            } */}

                {
                    deleteAsignments.map(asignment => <>
                        <div className="card bg-base-100 shadow-md">
                            <figure><img className='md:h-[150px]' src={asignment.photo} alt="img" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{asignment.title}</h2>

                                <div className='flex justify-between'>
                                    <p>Marks: {asignment.marks}</p>
                                    <p>Level: {asignment.level}</p>
                                </div>

                                <div className='pb-3'>
                                    <p>Due Date: {asignment.due}</p>
                                </div>

                                <div className="card-actions grid grid-cols-3">
                                    <button onClick={() => handledelete(asignment._id)} className="btn btn-outline border-[red]">Delete</button>


                                  <Link to={`/update/${asignment._id}`}><button className="btn btn-outline border-[green]">Edit</button> </Link>  

                                    <Link to={`/details/${asignment._id}`}><button className="btn btn-outline border-[blue]">View</button> </Link>



                                </div>
                            </div>
                        </div>
                    </>)
                }


            </div>


        </div>
    );
};

export default Asignments;
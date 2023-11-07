import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AsignmentCard from '../AsignmentCard';

const Asignments = () => {

    const asignments = useLoaderData()

    return (
        <div>
            <div className='my-10 font-bold text-center'>
                <h1 className='text-2xl md:text-4xl'>All Asignment</h1>
            </div>

            <div className='text-center md:flex justify-between'>
                <div className='my-10 font-bold'>
                    <h1 className='text-xl md:text-2xl'>Total Asignments: {asignments.length}</h1>
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
            {
                asignments.map(asignment => <AsignmentCard key={asignment._id} asignment={asignment}></AsignmentCard>)
            }
        </div>


        </div>
    );
};

export default Asignments;
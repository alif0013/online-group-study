import React from 'react';
import { Link } from 'react-router-dom';

const AsignmentCard = ({ asignment }) => {

    const { _id, title, photo, description, marks, level, due, email } = asignment;

    return (
        <div className="card bg-base-100 shadow-md">
            <figure><img className='md:h-[150px]' src={photo} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className='flex justify-between'>
                    <p>Marks: {marks}</p>
                    <p>Level: {level}</p>
                </div>

                <div className='pb-3'>
                    <p>Due Date: {due}</p>
                </div>
                
                <div className="card-actions grid grid-cols-3">
                    <button className="btn btn-outline border-[red]">Delete</button>

                    <button className="btn btn-outline border-[green]">Update</button>

                    <Link to={`/details/${_id}`}><button className="btn btn-outline border-[blue]">View</button></Link>
                    


                </div>
            </div>
        </div>
    );
};

export default AsignmentCard;
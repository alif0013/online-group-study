import React, { useState } from 'react';

const CreatAsignment = () => {

    const [selectedLevel, setSelectedLevel] = useState(''); // Initialize state for the selected level

    const handleAddAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const due = form.due.value;
        const level = selectedLevel; // Use the selectedLevel from state
        const photo = form.photo.value;

        const newAsignment = { title, description, marks, due, level, photo }

        console.log(newAsignment);
    }

    const handleLevelChange = e => {
        setSelectedLevel(e.target.value); // Update selectedLevel state when the select value changes
    };


    return (
        <div className='md:w-[1200px] text-center p-20 md:mx-auto bg-[#F4F3F0] mt-10'>

            <div className='text-center'>
                <h1 className='text-5xl mb-5'>Create An Asignment</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout.</p>

            </div>

            <form onSubmit={handleAddAssignment}>
                <div className='mt-3'>
                    <input type="text" name='title' placeholder="Title" className="input input-bordered w-full max-w-xs mr-5 mb-3" />
                    <input type="text" name='description' placeholder="Description" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className='mt-3'>
                    <input type="text" name='marks' placeholder="Marks" className="input input-bordered w-full max-w-xs mr-5 mb-3" />
                    <input type="text" name='due' placeholder="Due Date" className="input input-bordered w-full max-w-xs" />

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



                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className='mt-3'>

                </div>

                <button type='submit' className="btn md:w-[660px] text-white text-center bg-gradient-to-r from-[#4A00E0] to-blue-500 mt-6">Create Asignment</button>


            </form>


        </div>
    );
};

export default CreatAsignment;
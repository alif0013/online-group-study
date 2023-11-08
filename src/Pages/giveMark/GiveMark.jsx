import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';


const GiveMark = () => {

    const { user } = useContext(AuthContext)
    // const userEmail = user.email;
    // const userName = user.displayName;

    const submitedAsignments = useLoaderData()
    
    const { _id, note, link ,userEmail, userName } = submitedAsignments;
    

console.log(submitedAsignments);

    return (

        <div className='md:w-[1200px] text-center p-20 md:mx-auto bg-[#F4F3F0] mt-10'>

            <div className='text-center'>
                <h1 className='text-5xl mb-5'>Check Asignment</h1>

            </div>

            <form>
                <div className='mt-3'>
                    <input type="text" name='giveMarks'   placeholder="Give Marks" className="input input-bordered w-full max-w-xs mr-5 mb-3" />
                    <input type="text" name='feadback'  placeholder="Feadback" className="input input-bordered w-full max-w-xs" />

                </div>
                
            
                <button type='submit' className="btn md:w-[660px] text-white text-center bg-gradient-to-r from-[#4A00E0] to-blue-500 mt-6">Submit Marks</button>


            </form>


        </div>
    );
};

export default GiveMark; 
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

const Submit = () => {

    const { user } = useContext(AuthContext)
   
    


    const handleSubmit = e =>{
        e.preventDefault();
        
        const form = e.target;
        const link = form.link.value;
        const note = form.note.value;
        const userEmail = user.email;  
        const userName = user.displayName;  
        const submitAsignment = { note,link, userEmail, userName};
        console.log(Submit);

        fetch('https://online-group-study-server-l5x89tp06-alif0013s-projects.vercel.app/submitAsignment',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitAsignment)

           })
           .then(res => res.json())
           .then(data =>{
            console.log(data);
            if(data.insertedId){
                toast.success('Submit Asignment Successfully!')
            }
           })



    }


    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <h1 className="text-5xl font-bold">Submit now!</h1>

                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input name='title' type="text" defaultValue={title} placeholder="input your asignment link here" className="input input-bordered" required />
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Asignment</span>
                                </label>
                                <input name='link' type="text" placeholder="input your asignment link here" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <textarea type='text' name='note' className="textarea textarea-primary" placeholder="Quick Note"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submit;
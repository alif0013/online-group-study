import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const SubmittedAsignment = () => {

    const { user } = useContext(AuthContext)

    const [myAsignment, setMyAsignment] = useState([])

    const url = 'http://localhost:5000/myAsignments'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyAsignment(data))
    }, [])



    return (
        <div>

            <div>
                <h1 className='font-bold text-4xl text-center my-10'>All Submitted Asignment</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Marks</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myAsignment.map(asignment => <>
                                <tr>

                                    <td>{user.displayName}</td>
                                    <td>{asignment.title}</td>
                                    <td>{asignment.email}</td>
                                    <td>{asignment.marks}</td>
                                    <td> <Link to={'/'}><button className="btn btn-outline border-[blue]">Give Mark</button> </Link></td>
                                    

                                </tr>
                            </>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SubmittedAsignment;
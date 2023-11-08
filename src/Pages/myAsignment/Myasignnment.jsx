import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Myasignnment = () => {

    const { user } = useContext(AuthContext)

    const [myAsignment, setMyAsignment] = useState([])

    const url = `http://localhost:5000/myAsignments?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyAsignment(data))
    }, [])

    return (
        <div>
          <div>
            <h1 className='font-bold text-4xl text-center my-10'>My Asignment</h1>
          </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                          
                                <th>Title</th>
                                <th>Email</th>
                                <th>Marks</th>
                                <th>Status</th>
                                <th>Obtain Marks</th>
                                <th>Feadback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                           {
                            myAsignment.map(asignment =><>
                             <tr>
                                
                                <td>{asignment.title}</td>
                                <td>{asignment.email}</td>
                                <td>{asignment.marks}</td>
                                <td>Pending</td>
                                <td>comming</td>
                                <td>waiting</td>
                                
                            </tr>
                            </>)
                           }
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Myasignnment;
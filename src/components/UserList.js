import React, { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import swal from 'sweetalert';
import { getAllUserService } from '../service/user.service';
import '../styles/UserList.css'

const UserList = () => {
    const [users, setUsers] = useState({})
    const items = Object.values(users);
    useEffect(() => {
        getUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getUser = async () => {
        try {
            const response = await getAllUserService();
            if (response.data.data) {
                setUsers(response.data.data)
            }
        } catch (error) {
            swal("warning", error, "error")
        }
    }
    return (
        <div className='container'>
            <div className="userList mt-5">
            <h2 className='fw-bold mb-5 text-center'>Table</h2>
                {
                    items.length === 0 ?
                        <div className='d-flex justify-content-center align-items-center' style={{ height: "40vh" }}>
                            <span className='text-danger d-flex'> <h4 className='fw-bold me-2'>Loading data</h4>
                                <PulseLoader style={{ margin: "8px 0 0 0px" }} color="red" size="8px" />
                                <PulseLoader style={{ margin: "8px 0 0 0px" }} color="red" size="8px" />
                            </span>
                        </div> :
                        <table className='table'>
                            <thead>
                                <tr className='text-center'>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>DOB</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            {items.map((user, index) =>
                                <tbody key={user._id}>
                                    <tr className='text-center'>
                                        <td>{index + 1}</td>
                                        <td>{user.fullName}</td>
                                        <td>{user.dob.split('T')[0].split('-').reverse().join('-')}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                }
            </div>
        </div>
    );
};

export default UserList;




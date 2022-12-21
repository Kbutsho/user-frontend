import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { CreateUserService } from '../service/user.service';
import '../styles/Form.css';

const Form = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState({
        fullName: '',
        dob: '',
        email: '',
        phone: '',
        errors: ''
    })
    const handelOnChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(!loading);
            let formData = new FormData();
            formData.append('fullName', info.fullName)
            formData.append('dob', info.dob)
            formData.append('email', info.email)
            formData.append('phone', info.phone)
            const response = await CreateUserService(formData);
            if (response.data.errors) {
                setLoading(false);
                setInfo({ ...info, errors: response.data.errors });
                swal("warning", response.data.message, 'error')
            } else if (response.data.data) {
                setLoading(false);
                navigate('/layout-2')
                swal("success", response.data.message, 'success')
            }
        } catch (error) {
            setLoading(false);
            swal("warning", error.message, 'error')
            console.log(error)
        }
    }
    return (
        <div className='container'>
            <form className='form mt-5' onSubmit={handelSubmit} style={loading ? { boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" } : null}>
                <div className="row">
                    <div className="col-2"><h6 className='my-3'>{loading ? <small style={{ color: "red", fontWeight: "bold" }}>submitting... please wait!</small> : null}</h6></div>
                    <div className="col-10"><h2 className='my-3 fw-bold'>Form Design</h2></div>
                </div>

                <div className="row">
                    <div className="col-2"><h5 className='my-3'>Full Name</h5></div>
                    <div className="col-10">
                        <input type="text" name="fullName" value={info.fullName} onChange={handelOnChange} className='form-control my-3' />
                        <div className='mt-2' style={{
                            color: "red", fontSize: "12px", fontWeight: "bold"
                        }}>{info.errors.fullName ? <span className='mt-3'>{info.errors.fullName}</span> : null}</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2"><h5 className='my-3'>Date Of Birth</h5></div>
                    <div className="col-10">
                        <input type="date" name="dob" value={info.dob} onChange={handelOnChange} className='form-control my-3' />
                        <div className='mt-2' style={{
                            color: "red", fontSize: "12px", fontWeight: "bold"
                        }}>{info.errors.dbo ? <span className='mt-3'>{info.errors.dbo}</span> : null}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2"><h5 className='my-3'>Email</h5></div>
                    <div className="col-10">
                        <input type="text" name="email" value={info.email} onChange={handelOnChange} className='form-control my-3' />
                        <div className='mt-2' style={{
                            color: "red", fontSize: "12px", fontWeight: "bold"
                        }}>{info.errors.email ? <span className='mt-3'>{info.errors.email}</span> : null}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2"><h5 className='my-3'>Phone Number</h5></div>
                    <div className="col-10">
                        <input type="text" name="phone" value={info.phone} onChange={handelOnChange} className='form-control my-3' />
                        <div className='mt-2' style={{
                            color: "red", fontSize: "12px", fontWeight: "bold"
                        }}>{info.errors.phone ? <span className='mt-3'>{info.errors.phone}</span> : null}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-10 d-flex justify-content-end">
                        <button type='submit' className='btn btn-primary px-4'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
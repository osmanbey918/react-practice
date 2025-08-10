import React, { useEffect, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom';

export default function Login() {
    const [form, setform] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem("mydata"))
        if (data.email == form.email && data.password == form.password) {

            console.log("true login");
            navigate('/welcome')
        }else console.log("wrong");
        

    }
    const handlechange = (feild) => (e) => {
        setform((prev) => ({...prev, [feild] : e.target.value}))
    }
    useEffect(() => {
        console.log(form);

    }, [form])
    return (
        <div>
            <form className='text-3xl text-white p-20 flex flex-col border' onSubmit={handlesubmit}>
                <h1 className=''>I am Login</h1>
                <label className='text-white'>Email</label>
                <input type='email' className='bg-gray-900 text-xl text-white-200 p-4' onChange={handlechange('email')} />
                <label>Password</label>
                <input type='password' className='bg-gray-900 text-xl text-white-200 p-4' onChange={handlechange('password')} />
                <button type='submit'>login</button>
            </form>
        </div>
    )
}

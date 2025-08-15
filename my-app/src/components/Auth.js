import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

export default function Auth() {
    const [form, setForm] = useState({ username:'', email:'', password:'' })
    const handlechange = feild => (e) => {
        setForm({ ...form, [feild]: e.target.value })
    }
    useEffect(() => {
        const data = localStorage.getItem("mydata");
        console.log(data);
        setForm(JSON.parse(data))

    },[])
    console.log(form);
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("your data",form);
        localStorage.setItem("mydata",JSON.stringify(form));
        navigate("/login")
    }
    //
    return (
        <div className='container mx-auto flex justify-center min-h-[100vh]'>
            <form onSubmit={handlesubmit} className='flex flex-col gap-8 text-white justify-center border  text-2xl p-20'>
                <h1 className='text-blue-600 text-4xl flex flex-row mt-20 space-x-8'>Muhammad haseeb </h1>
                <label className='' htmlFor='username'>Username</label>
                <input name='username' label="username"
                type='text' required onChange={handlechange("username")} className='space-x-8 shadow-lg text-gray-600 px-2 py-2 text-xl mx-2 rounded' />
                <label>E-mail</label>
                <input type='email' required onChange={handlechange("email")} className='text-gray-600 px-2 py-2 text-xl mx-2 rounded' />
                <label>Password</label>
                <input type='password' required onChange={handlechange("password")} className='text-gray-600 px-2 py-2 text-xl mx-2 rounded' />
                <button type='submit'>submit</button>
            </form>

        </div>
    )
}

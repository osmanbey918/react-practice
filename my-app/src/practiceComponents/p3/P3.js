import React, { useState } from 'react'
import './p3.css'
export default function P3() {
    const [form, setForm] = useState(true);
    const [st, setst] = useState("tr");
    const shiftHandle = () => {
        setForm(!form)
        setst("kh")
    }
    const shiftHandle1 = () => {
        setst("tr")
    }

    return (
        <div className='main'>

            <div className='box'>
                <form>
                    <h1>Signup</h1>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' />
                    <label htmlFor='password' >Password:</label>
                    <input type='password' name='password' />
                    <button type='button' onClick={shiftHandle}>clicke me</button>
                </form>
            </div>
            <div className={`box form ${st}`}>
                <form>
                    <h1>Login</h1>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' />
                    <label htmlFor='password' >Password:</label>
                    <input type='password' name='password' />

                    <label id='username'>Username:</label>
                    <input type='text' />

                    <label>Gender:</label>
                    <input type='radio' />
                    <input type='radio' />
                    <button type='button' onClick={shiftHandle1}>submit</button>
                </form>
                <button type='button' onClick={shiftHandle}>Shift</button>
            </div>



        </div>
    )
}

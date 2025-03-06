import React, { useState } from 'react'

export default function SignUp() {
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
    <div>
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
    </div>
  )
}

import React, { useState } from 'react'
import './p.css'
export default function P() {
        const [formArray, setformArray] =useState(['usman']);
    const [form, setFormVisible] = useState(false)
    const [w, setw] = useState(window.innerWidth)
    const myform = <form>
        <input type='email' />
        <input type='password' />
        <button>Submit</button>
        <button onClick={() => setFormVisible(!form)} type='button'>forgot password</button>
    </form>
    console.log(w);
    
    const cssClass = ['usman', 'khan', 'bey']
    
    return (

        <div>
            <h1>Practice</h1>
            <form>
                <input type='email' />
                <input type='password' />
                <button>Submit</button>
                <button onClick={() => {
                    setformArray([...formArray, 'usman'])
                    setFormVisible(!form)
                    console.log(formArray.length)
                }} type='button'>forgot password</button>
                {form ? <div>Hello great usman khan bey  you are welcome</div > : myform}
                {console.log(form)
                }

            </form>

            <div className={w>400?cssClass[0]:cssClass[1]}>hedjneindiunjk</div>

        </div>
    )
}

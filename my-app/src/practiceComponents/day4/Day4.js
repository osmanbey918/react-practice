import React from 'react'
import './day4.css'
export default function day4() {
    const handle1 = () => {
        document.getElementsByClassName('box')[0].style.color = 'red'
    }
    return (
        <div>
            <h1 className='box'>hello usman bey</h1>
            <button onClick={handle1}>click</button>
        </div>
    )
}

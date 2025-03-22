import React from 'react'
import img from '../../assets/home.jpeg'
import Bar from '../bar/Bar'
export default function BillBoard() {
    const hello = (text) => {
        console.log(text)
    }
    return (
        <div className='billBoard'>
            <div className='text-container'>
                <h1>Perfect way to buy<br/> and sell a home</h1><br/>
                <p>Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui pellentesque. Ac, gravida in eget non amet eget purus non.</p><br/><br/>
                <Bar />
            </div>
            <div className='img-container'>
                <img src={img} alt="home" className='img' />
            </div>
            <button type='button' hello={hello('i am good ')}></button>
        </div>
    )
}

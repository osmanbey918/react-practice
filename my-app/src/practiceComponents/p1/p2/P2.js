import React, { useCallback, useEffect, useMemo, useState } from 'react';

export default function P2() {
    const [count, setCount] = useState(0);
    const [formdata, setFormdata] = useState({ email: '', password: '' });
    const [dataArray, setDataArray] = useState([]);
    const [count2, setcount2] = useState(0);
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    
    const counter = useCallback(() => {
        setcount2(count2 + 5);
    }, [count2]);

    const countdata = useMemo(() => {
        return Math.random();
    }, []);
    
    const sumOfNumbers = useMemo(() => {
        console.log('Calculating sum...');
        return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers]);

    const [state, setState] = useState(() => {
        const initialState = { email: '', password: '' };
        return initialState;
    });

    const [nestedObject, setNestedObject] = useState({
        users: {
            userEmail: '',
            userPassword: ''
        },
        admin: {
            adminEmail: '',
            adminPassword: ''
        }
    });
    // setTimeout(() => {
    //     // setNumbers([...numbers, numbers.length + 1]);
    // }, 1000);
    useEffect(() => { setCount(count + 10) }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDataArray(prevArray => [...prevArray, formdata]);
        console.log('Submitted');
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button type='button' onClick={() => setCount(count + 1)}>Click me</button>

            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type='email' name='email' onChange={handleChange} />
                <label>Password:</label>
                <input type='password' name='password' onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>

            <h1>All data</h1>
            {dataArray.map((data, index) => {
                return (
                    <div key={index}>
                        <h3>Email: {data.email}</h3>
                        <h3>Password: {data.password}</h3>
                    </div>
                );
            })}
            <h1>{count2}</h1>
            <h1>{countdata}</h1>
            <button type='button' onClick={counter}>click me</button>

            <h1>Sum of Numbers: {sumOfNumbers}</h1>
            <button type='button' onClick={() => setNumbers([...numbers, numbers.length + 1])}>Add Number</button>
        </div>
    );
}
//useCallback is used to memoize a function so that it is not re-rendered every time the component re-renders. It is used to optimize the performance of the component.
//useEffect is used to perform side effects in the component. It is similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
//useMemo is used to memoize a value so that it is not re-calculated every time the component re-renders. It is used to optimize the performance of the component.
//useState is used to manage the state of the component. It is similar to this.state and this.setState in class components.
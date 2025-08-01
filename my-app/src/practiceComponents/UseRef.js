import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
// export default function UseRef() {
//     const intervalRef = useRef(null);
//     const [timer, setTimer] = useState(0)
//     const startTimer = () => {
//         if (intervalRef.current) return; // prevent multiple intervals
//         intervalRef.current = setInterval(() => {
//             setTimer(prev => prev + 1);
//         }, 1000);
//     };

//     const stopTimer = () => {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//     };
//     return (
//         <div>
//             <h1>{timer}</h1>
//             <button onClick={startTimer} >start</button>
//             <button onClick={stopTimer} >stop</button>
//             <button onClick={() => setTimer(0)} >restart</button>

//         </div>
//     )
// }



export default function UseRef() {
  const formRef = useRef({
    name: '',
    email: '',
    age: ''
  });

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, age } = formRef.current;

    // 🔍 Simple validation checks
    if (!name || !email || !age) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Invalid email address');
      return;
    }

    if (isNaN(age) || age < 1) {
      setError('Age must be a positive number');
      return;
    }

    // ✅ Passed
    setError('');
    console.log('Submitted:', formRef.current);
    setdata(formRef.current)
    // Optional: clear form
    formRef.current = { name: '', email: '', age: '' };
  };
  const [data, setdata] = useState({})
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => (formRef.current.name = e.target.value)}
        /><br />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => (formRef.current.email = e.target.value)}
        /><br />

        <input
          type="number"
          placeholder="Age"
          onChange={(e) => (formRef.current.age = e.target.value)}
        /><br />

        <button type="submit">Submit</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      
      
        <div>
          <p>{data.age}</p>
          <p>{data.name}</p>
          <p>{data.email}</p>
        </div>
      
      </>
  );
}

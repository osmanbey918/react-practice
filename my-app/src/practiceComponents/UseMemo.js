import React, { useEffect, useMemo, useState } from 'react'

export default function UseMemo() {
  const [counter, setCounter] = useState(0)

  const expensiveResult = useMemo(() => {
    console.log('Expensive calculation running...');
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += i;
    }
    return total + counter;
  }, [counter]);

  useEffect(() => {
    console.log('Effect ran with expensive result:', expensiveResult);
  }, [expensiveResult]);

  return (
    <div>
      <p>Counter: {counter}</p>
      <p>Expensive Result: {expensiveResult}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

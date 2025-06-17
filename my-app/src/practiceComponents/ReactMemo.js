import React, { useState, memo } from 'react';

const Child = memo(function Child({ name }) {
  console.log('Child rendered');
  return <h2>Hello, {name}</h2>;
});

export default function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <Child name="Usman" />
    </div>
  );
}

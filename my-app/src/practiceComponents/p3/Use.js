import React, { useState } from 'react';

export default function Use() {
  const [form, setForm] = useState({ username: '', age: 0 });

  const handleChange = (field) => (e) => {
    const value = field === 'age' ? Number(e.target.value) : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', form);
    // Add any submission logic here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' value={form.username} onChange={handleChange('username')} />
        
        <label>Age</label>
        <input type='number' value={form.age} onChange={handleChange('age')} />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

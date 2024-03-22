import React from 'react';

const Input = ({ label, type, name, placeholder, ...props }) => (
  <div className='flex flex-col mb-2'>
    <label htmlFor={name}>{label}</label>
    <input
      className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md'
      type={type}
      name={name}
      placeholder={placeholder}
      id={name}
      {...props}
    />
  </div>
);

export default Input;
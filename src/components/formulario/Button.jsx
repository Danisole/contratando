import React from 'react';

const Button = ({ text, direction, onClick, ...props }) => (
  <button
    className={`w-full px-6 py-3 bg-brandPrimary text-white font-medium uppercase rounded-full shadow-md hover:bg-blue-900 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 ${
      direction === 'previous' ? 'mr-3' : ''
    }`}
    onClick={onClick}
    {...props}
  >
    {text}
  </button>
);

export default Button;
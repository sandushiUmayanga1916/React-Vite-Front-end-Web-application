/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className=' px-6 py-1 border-white border-2 bg-[#FFDCAB] hover:text-brightColor transition-all rounded-full'>
        {props.title}
      </button>
    </div>
  )
}

export default Button
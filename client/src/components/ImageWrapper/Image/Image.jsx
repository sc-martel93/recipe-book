import React from 'react'

const Image = ({title, src, alt}) => {
  return (
    <>
      <h2 className="text-xl text-center font-bold mt-5">{title}</h2>
      <img src={src} alt={alt} className="w-5/6 mx-auto rounded-lg shadow-xl shadow-slate-600" />
    </>
  )
}

export default Image
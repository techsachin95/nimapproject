import React from 'react'
import './Information.css'
const Information = ({heading1,content1,heading2,content2,heading3,content3,heading4,content4,note1}) => {
  return (
    <>
     <div className='info'>
      <h1>{heading1}</h1>
      <p>{content1}</p>
      <h1>{heading2}</h1>
      <p>{content2}</p>
      <h1>{heading3}</h1>
      <p>{content3}</p>
      <h1>{heading4}</h1>
      <p>{content4}</p>
      <h3>{note1}</h3>
      </div>
    </>
    )
}

export default Information
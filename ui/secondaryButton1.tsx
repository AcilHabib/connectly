'use client'
import React, { useState } from 'react'

function SecondaryButton1({buttonText,width, height}:{buttonText : string, width
    : string , height : string
}) {

    const [isHovered, setIsHovered]=useState(true)
  return (
    <div>
      <button style={{
        width: width,
        height:height,
        border: 'none',
        borderRadius:'16px',
        cursor:'pointer',
        backgroundColor: isHovered? '#b6b6b6ff':'transparent',
      }} onClick={()=>{
        console.log('hi');
      }}  >
        <p style={{
            fontFamily: 'Roboto',
            fontWeight: '900',
            color:isHovered?'white': 'black'}}>{buttonText}</p>
      </button>
    </div>
  )
}

export default SecondaryButton1

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
        border: 'solid 1px #b6b6b6ff',
        borderRadius:'16px',
        cursor:'pointer',
      }} onClick={()=>{
        console.log('hello from the other side ');
      }}  >
        <p style={{
            fontFamily: 'Roboto',
            fontWeight: '900',
            color:' #b6b6b6ff'}}>{buttonText}</p>
      </button>
    </div>
  )
}

export default SecondaryButton1

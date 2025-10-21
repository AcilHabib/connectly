'use client'
import React, { useEffect, useState } from 'react'

function PrimaryButton({buttonText,width, height}:{buttonText : string, width
    : string , height : string
}) {

    const [isHovered, setIsHovered]=useState(false)

    useEffect(()=>{

    },[isHovered])
  return (
    <div>
      <button style={{
        width: width,
        height:height,
        border: 'none',
        transition:'all 0.3s  ease ',
        borderRadius:'16px',
        cursor:'pointer',
        backgroundColor: !isHovered? '#3E1698':'transparent',
      }} onClick={()=>{
        console.log('hi little shit ');
      }} 
      onMouseEnter={()=>{setIsHovered(true)}}
      onMouseLeave={()=>{setIsHovered(false)}}
      
      >
        <p style={{
            fontFamily: 'Roboto',
            fontWeight: '900',
            transition:'all 0.3 ease',
            color:isHovered? '#3E1698': 'white'}}
             onMouseEnter={()=>{setIsHovered(true)}}
      onMouseLeave={()=>{setIsHovered(false)}}
            >{buttonText}</p>
            
      </button>
    </div>
  )
}

export default PrimaryButton

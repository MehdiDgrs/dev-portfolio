import React from 'react'

export default function()  {

   let variable = 5;

    setTimeout(() => {
      variable+3;
    }, 100)
  
    return <div>{variable}</div>

}
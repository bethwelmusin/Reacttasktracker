import React from 'react'

const Button = () => {

    const onClick =() => {
        console.log("i was clicked")
    }
  return (
    <div>
        <button style={{backgroundColor:'steelblue'}} onClick= {onClick} className='btn'>Add</button>   
    </div>
  )
}

export default Button
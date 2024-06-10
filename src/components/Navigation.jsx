import React from 'react'

export default function Navigation() {
  return (
   <>
    <nav>
      <div className='logo'>
      <img src="/brand_logo.png" alt="Nike logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className='btn'>Login</button>
    </nav>
   </>
  )
}

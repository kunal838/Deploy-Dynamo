import React from 'react'
import Change from './Change'

function Navbar() {
  return (
    <>
    <nav className='  flex items-center justify-between'>
        <p className=' font-semibold text-xl p-4'>
            D-D
        </p>
        <div className='p-4'>
        <Change/>
        </div>
        
        
    </nav>
   
    </>
    
  )
}

export default Navbar
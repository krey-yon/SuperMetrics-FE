import React from 'react'
import { CiMenuFries } from "react-icons/ci";


function MobileNavbar() {
  return (
    <div className='flex md:hidden'>
      <CiMenuFries size={28} />
    </div>
  )
}

export default MobileNavbar
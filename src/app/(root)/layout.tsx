import Navbar from '@/Components/Navbar'
import React from 'react'

const Layout:React.FC<Readonly<{children:React.ReactNode}>> = ({children}) => {
  return (
    <main className='font-work-sans'>
      <Navbar/>
      {children}
    </main>
  )
}

export default Layout
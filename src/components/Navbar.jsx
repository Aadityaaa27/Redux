import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <div className="flex flex-wrap justify-between items-center gap-4 px-6 sm:px-10 py-5 bg-(--c2) shadow-lg">
         <h2 className='font-semibold text-2xl tracking-wide'>MediaSearch</h2>
         <div className="flex gap-2 items-center">
         <Link className="inline-flex min-w-24 items-center justify-center whitespace-nowrap text-sm sm:text-base font-semibold active:scale-95 hover:bg-indigo-600 hover:text-white transition-all bg-(--c4) text-(--c1) rounded-lg px-4 py-2.5 shadow-sm hover:shadow-md" to="/">Search</Link>
          <Link className="inline-flex min-w-24 items-center justify-center whitespace-nowrap text-sm sm:text-base font-semibold active:scale-95 hover:bg-indigo-600 hover:text-white transition-all bg-(--c4) text-(--c1) rounded-lg px-4 py-2.5 shadow-sm hover:shadow-md" to="/collection">Collection</Link>
      </div>
      </div>

  )
}

export default Navbar

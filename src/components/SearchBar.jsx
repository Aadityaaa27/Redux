import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text.trim()))
    setText("")
    
  }
  return (
    
       <div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex bg-(--c1) gap-5 px-6 sm:px-10 pt-8 pb-10 mb-6'>

                <input
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    required
                    className='w-full border-2 px-6 py-3 text-xl rounded outline-none'
                    type="text"
                    placeholder='Search anything...' />

                <button className='shrink-0 min-w-28 active:scale-95 cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 sm:px-6 py-3 text-base sm:text-xl rounded-lg shadow-md hover:shadow-lg transition-all'>Search</button>
            </form>
        </div>
    
  )
}

export default SearchBar

import React from 'react'
import CollectionCard from '../components/CollectionCard'
import { useDispatch, useSelector } from 'react-redux'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const dispatch = useDispatch()
  const collection = useSelector((state) => state.collection.items)
  return (
   <div className="overflow-auto px-6 sm:px-10 py-6">
    <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
      <h2 className='text-2xl font-semibold tracking-wide'>Your Collection</h2>
      <button
        onClick={() => dispatch(clearCollection())}
        className='inline-flex min-w-36 items-center justify-center whitespace-nowrap bg-red-600 hover:bg-red-500 active:scale-95 px-5 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all'
      >
        Clear Collection
      </button>

    </div>
    <div>

    </div>
       <div className='flex justify-start w-full flex-wrap gap-6'>
        {collection.map((item,idx) => {
            return <div key={item.id || idx}>
               <CollectionCard item={item} />
            </div>
        })}
    </div>
   </div>
  )
}

export default CollectionPage

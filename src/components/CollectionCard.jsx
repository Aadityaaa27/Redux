import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({ item }) => {

  const dispatch = useDispatch()

  const removeFromCollection = () => {
    dispatch(removeCollection(item.id))
    dispatch(removeToast())
  }
  return (
     <div className='w-full sm:w-[18rem] relative h-80 bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/30'>
            <a target='_blank' rel='noreferrer' className='h-full' href={item.url}>
                {item.type === 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.title} /> : ''}
                {item.type === 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
                {item.type === 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.title} /> : ''}
            </a>
            <div id='bottom' className='flex justify-between gap-3 items-end w-full px-4 pt-12 pb-4 absolute bottom-0 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent'>
                <h2 className='min-w-0 text-base sm:text-lg font-semibold capitalize leading-tight line-clamp-2'>{item.title}</h2>
                <button
                    onClick={removeFromCollection}
                    className='shrink-0 inline-flex min-w-20 items-center justify-center whitespace-nowrap bg-red-600 hover:bg-red-500 active:scale-95 text-white rounded-lg px-3 py-2 cursor-pointer text-sm font-semibold shadow-md transition-all'
                >
                    Remove
                </button>
            </div>
        </div>
  )
}

export default CollectionCard

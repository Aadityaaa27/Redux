import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {

    const dispatch = useDispatch()

    if (!item) return null

    const addToCollection = () => {
        dispatch(addCollection(item))
        dispatch(addedToast())
    }

    return (
        <div className='w-full sm:w-[18rem] relative h-80 bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/30'>
            <a target='_blank' rel='noreferrer' className='h-full' href={item.url}>
                {item.type === 'photo' || item.type === 'gif'
                    ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.title} />
                    : <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} />}
            </a>
            <div className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
                <button
                    onClick={addToCollection}
                    className='shrink-0 min-w-24 sm:min-w-28 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white rounded-lg px-5 sm:px-6 py-3 sm:py-3.5 text-base sm:text-lg font-semibold shadow-lg hover:shadow-indigo-400/40 cursor-pointer transition-all'
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default ResultCard
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'gif']

    const dispatch = useDispatch()

    const activeTab = useSelector((state)=>state.search.activeTab)

    return (
        <div className='flex gap-4 px-6 sm:px-10 pt-2 pb-6 sm:pb-8'>
            {tabs.map(function (elem, idx) {
                return (
                    <button
                        className={`${(activeTab==elem?'bg-blue-700 shadow-blue-500/40':'bg-gray-600 hover:bg-gray-500')} min-w-28 sm:min-w-36 mt-2 mb-2 px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold tracking-wide text-white rounded-xl shadow-lg transition-all cursor-pointer active:scale-95`}
                        key={idx}
                        onClick={() => {
                            dispatch(setActiveTabs(elem))
                        }}
                    >
                        {elem}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs
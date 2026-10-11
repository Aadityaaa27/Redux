
import ResultCard from '../components/ResultCard'
import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const{query} = useSelector((store) => store.search)
  return (
    <div >
       <SearchBar  />
        {query !== "" ? (
          <div>
            <Tabs />
            <ResultCard />
            <div>
              <ResultGrid />
            </div>
          </div>
        ) : (
          <h1 className="text-3xl px-5 ">No results found</h1>
        )}
         
    </div>
  )
}

export default HomePage

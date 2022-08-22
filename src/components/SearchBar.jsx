import {useContext} from 'react'
import { SearchContext } from '../context/SearchContext'
const SearchBar = () => {
  //CONTEXT VALUES
  //HandleSearch
  //Term
  const [searchTerm, setSearchTerm] = useContext(SearchContext)
  return (
    <div>
      <form>
        <input ref={term}type="text" placeholder="search a song you fucking twat" />
        <button onClick = {(e)=>handleSearch(e,term.current.value) }>Submit!</button>
      </form>
    </div>
  )
}

export default SearchBar
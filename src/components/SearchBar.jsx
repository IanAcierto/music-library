import {useState} from 'react'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div>
      <form>
        <input type="text" placeholder="search a song you fucking twat" />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default SearchBar
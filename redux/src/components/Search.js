import React from 'react'
import { useDispatch } from 'react-redux'
import { handleSearch } from '../actions/userActions'

const Search = props => {
  const dispatch = useDispatch()

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => dispatch( handleSearch(e.target.value) )} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search

import React from 'react'

const Search = () => {
  return (
    <form className="navbar-form navbar-left">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search" />
      </div>
      <button type="submit" className="btn btn-default">
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
      </button>
    </form>
  )
}

export default Search

import React, { useState } from 'react'

const SearchForm = props => {
  const [search, setSearch] = useState()

  const handleChange = e => {
    const event = e.target.value
    console.log(`event in SearchForm handleChange: ${search}`)
    setSearch(event)
  }

  const handleSubmit = () => {
    const newSearch = search
    console.log('newSearch in SearchForm component:', newSearch)
    props.setQuery(newSearch)
    setSearch('')
  }

  return (
    <>
      <form className='search-form' onSubmit={e => handleSubmit(e)}>
        <input
          type='text'
          placeholder='search by username'
          onChange={e => handleChange(e)}
        />
        <input type='submit' />
      </form>
    </>
  )
}

export default SearchForm

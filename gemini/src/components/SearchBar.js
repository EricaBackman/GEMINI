import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


function SearchBar() {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  return (
    <>
      <script></script>
      <SearchBarWrapper>
        <SearchInput
          className="close"
          type="search"
          placeholder="SÖK"
          onChange={handleChange}
          value={searchInput}
        />
      </SearchBarWrapper>
      <div>
        <h1>{searchInput}</h1>
      </div>
    </>
  )
}

export default SearchBar

const SearchBarWrapper = styled.div`
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css");
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #9f97bf;
  background-color: white;
  height: 66px;

  .close::-webkit-search-cancel-button {
    position: relative;
    right: 0px;
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>');
    background-size: 0.8rem 0.8rem;
    background-repeat: no-repeat;
    background-position: right center;
    color: #9f97bf;
  }

  input:focus {
    outline-width: 1;
    outline-color: #9f97bf;
    outline-style: solid;
  }
`
const SearchInput = styled.input`
  position: left center;
  border: solid 0.5px;
  border-radius: 50px;
  border-color: #9f97bf;
  width: 80%;
  height: 1.5rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  padding-top: 0.6rem;
  padding-bottom: 0.7rem;
  font-size: 16px;
  font-family: 'Bootstrap-icons', 'Darker Grotesque', sans-serif ;

  &::placeholder {
    /* Use the SVG data URL of the SearchHeart icon as a background image */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%239f97bf' class='bi bi-search-heart' viewBox='0 0 16 16'%3E%3Cpath d='M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z'%3E%3C/path%3E%3Cpath d='M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 1rem; /* adjust the size of the icon */
    background-repeat: no-repeat;
    background-position: 0.5rem center; /* position the icon to the left of the text */
    padding-left: 1.8rem; /* adjust the left padding to make room for the icon */
    color: #9f97bf;
  }
`

'use strict'

import React, { PropTypes } from 'react'
import style from './search.css'

const Search = ({ handleSearch, isDisabled }) => (
  <div className={style.search}>
    <input
      disabled={isDisabled}
      type='search'
      placeholder='Digite o nome do usuário no Github e pressione [Enter]'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search

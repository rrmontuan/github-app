'use strict'

import React, { PropTypes } from 'react'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'
import style from './app.css'

console.log(style)

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred, isFetching }) => (
  <div className={style.app}>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo &&
      <Actions
        getRepos={getRepos}
        getStarred={getStarred}
      />
    }

    <div className={style.reposContainer}>
      {!!repos.length &&
        <Repos
          className='repos'
          title='Repositórios:'
          repos={repos}
        />
      }

      {!!starred.length &&
        <Repos
          className='starred'
          title='Favoritos:'
          repos={starred}
        />
      }
    </div>
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default AppContent

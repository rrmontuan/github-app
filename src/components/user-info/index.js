'use strict'

import React, { PropTypes } from 'react'
import style from './user-info.css'

const UserInfo = ({ userinfo }) => (
  <div className={style.userInfo}>
    <img src={userinfo.photo} />

    <h1 className='username'>
      <a href={`https://github.com/${userinfo.login}`}>
        {userinfo.username}
      </a>
    </h1>

    <ul className={style.reposInfo}>
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired
  })
}

export default UserInfo

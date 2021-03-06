'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

      ajax().get(this.getGitHubApiUrl(value))
      .then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following,
            photo: result.avatar_url,
            login: result.login
          },
          repos: [],
          starred: []
        })
        // console.log(result)
      })
      .always(() => {
        this.setState({ isFetching: false })
      })
    }
  }

  getRepos (type) {
    return (e) => {
      const username = this.state.userinfo.login

      ajax().get(this.getGitHubApiUrl(username, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({
              link: repo.html_url,
              name: repo.full_name
            }))
          })
        })
    }
  }

  render () {
    return <AppContent
      {...this.state}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App

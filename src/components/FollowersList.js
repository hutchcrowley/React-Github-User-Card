import React from 'react'

import SearchForm from './SearchForm'

import Follower from './Follower'

const FollowersList = props => {
  console.log(`setQuery prop inside FollowersList: ${toString(props.setQuery)}`)

  return (
    <>
      <div className='followers-header'>
        <SearchForm setQuery={props.setQuery} />
        <h1>My Followers!</h1>
        <h4>{props.userFollowers}</h4>
      </div>
      <div className='followers-list'>
        {props.followers.map(follower => (
          <div id={follower.id} key>
            <Follower
              picture={follower.avatar_url}
              handle={follower.login}
              profile={follower.html_url}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default FollowersList

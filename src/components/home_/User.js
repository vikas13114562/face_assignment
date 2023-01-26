import React from 'react'
import './home.css'

export default function User({userDetail}) {

  const {name:{title,first,last},location:{state},picture:{medium}} = userDetail
  return (
    <div className='user-container'>
        <img className='user-img' src={medium} alt='img' />
        <h3>Name: {`${title} ${first} ${last}`}</h3>
        <p>State : {state}</p>
    </div>
  )
}

import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
    const navigate = useNavigate()
  return (
    <div className='nav'>
        <div onClick={()=>(navigate('/'))}>
            Logout
        </div>
    </div>
  )
}

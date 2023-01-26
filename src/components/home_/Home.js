import React, {useEffect, useState} from 'react'
import './home.css'
import Nav from './Nav'
import User from './User'

export default function Home() {

    const [user, setUser] = useState([])

    useEffect(()=>{
        async function getUser() {
            let temp = await fetch('https://randomuser.me/api/?results=500')
            let data = await temp.json();
            setUser(data.results)
            
        }
        getUser()
    },[])
    
  return (
    <div className='home'>
        <Nav />
        <div className='home-container'>
            {
                user && user.map((ele,ind) =>{
                    return(
                        <User key = {ind} userDetail = {ele} />
                    )
                })   
            }
            
        </div>
    </div>
  )
}

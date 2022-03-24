import React from 'react'
import {Link} from 'react-router-dom'

function TopNav() {
  return (
    
    <div className="bg-[#e13a3e] h-10 w-screen text-white p-2 flex justify-between">
      <div><Link to="/">Scientific Terrapin</Link></div>
      <div>
        <ul className="flex ">
          <li className="ml-10 "> <Link to="/about">About</Link> </li>
          <li className="ml-10  "> <Link to="/currentissue">Current Issue</Link> </li>
          <li className="ml-10  "> <Link to="/terpspublish">Terps Publish</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default TopNav
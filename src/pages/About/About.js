import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div className="p-10">
      Links to be displayed here:
      <ul className=" ">
          <li className="ml-10 w-auto hover:underline"> <Link to="/about/editorialteam">Editorial Team</Link> </li>
          <li className="ml-10 hover:underline "> <Link to="/about/contact">Contact</Link> </li>
          <li className="ml-10 hover:underline "> <Link to="/about/membership">Membership</Link> </li>

        </ul>
    </div>
  )
}

export default About
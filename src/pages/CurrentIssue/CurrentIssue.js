import React from 'react'
import {Link} from 'react-router-dom'

function CurrentIssue() {
  return (
    <div className="p-10">
      Links to be displayed here:
      <ul className=" ">
          <li className="ml-10 w-auto hover:underline"> <Link to="/currentissue/applied-and-physical-sciences">Applied and Physical Sciences</Link> </li>
          <li className="ml-10 hover:underline "> <Link to="/currentissue/life-sciences">Life Sciences</Link> </li>
          <li className="ml-10 hover:underline "> <Link to="/currentissue/social-sciences">Social Sciences</Link> </li>
          <li className="ml-10 hover:underline "> <Link to="/currentissue/arts-and-humanities">Arts and Humanities</Link> </li>

        </ul>
    </div>
  )
}

export default CurrentIssue
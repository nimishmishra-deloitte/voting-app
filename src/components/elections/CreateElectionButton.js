import React from 'react'
import { Link } from 'react-router-dom'
const CreateElectionButton=()=> {
  return (
    <React.Fragment>
      <Link to="/addElection" className='btn btn-lg btn-info'>
        Add Election
      </Link>
    </React.Fragment>
  )
}
export default CreateElectionButton;

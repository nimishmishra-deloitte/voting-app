import React from 'react'

export default function ShowELections() {
  return (
    <div className="elections">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="display-4 text-center">Election Details</h1>
                <br />
                <CreateElectionButton/>
                <br />
                <hr />

               <Election/>
                
            </div>
        </div>
    </div>
</div>
  )
}

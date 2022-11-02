import React, { Component } from 'react'
import "./election.css"
export default class Election extends Component {
  render() {
    return (
      <div className="container">
                    <div className="card card-body bg-light mb-3">
                        <div className="row">
                            <div className="col-2">
                                <h4 className="mx-auto">Chief Minister Election</h4>
                            </div>
                            <div className="col-md-4 d-none d-lg-block ms-auto">
                                <ul className="list-group">
                                    <a href="#">
                                        <li className="list-group-item board">
                                            <i className="fa fa-flag-checkered pr-1">  Election Board</i>
                                        </li>
                                    </a>
                                    <a href="#">
                                        <li className="list-group-item update">
                                            <i className="fa fa-edit pr-1">  Update Election Details</i>
                                        </li>
                                    </a>
                                    <a href="">
                                        <li className="list-group-item delete">
                                            <i className="fa fa-minus-circle pr-1">  Delete Election</i>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

    )
  }
}

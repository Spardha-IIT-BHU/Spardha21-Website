import React from 'react'
import "./Profile.css"

const Profile = () => {
  return (
    <div className="user-dashboard">
                    <div className="row_dbProfile">
                        <div className="col-xs-12 gutter widthAdjust">

                            <div className="welcome-text" style={{lineHeight: '1'}}>
                                <div className="text-justify">
                                    <h2>


                                    {/* <div style={{textAlign: right}}><a href="profile.php?mode=edit">Edit</a></div> */}
                                    <table align="center" cellpadding="20" className="profile-table">
                                        <tr>
                                            <td className="left-column">Name: </td>
                                            <td className="right-column overHandle">Ashish Kumar</td>
                                        </tr>
                                        <tr>
                                            <td className="left-column">Email: </td>
                                            <td className="right-column overHandle">ashishkumar.cse18@itbhu.ac.in</td>
                                        </tr>
                                        <tr>
                                            <td className="left-column">Username: </td>
                                            <td className="right-column overHandle">ashishkumar</td>
                                        </tr>
                                        <tr>
                                            <td className="left-column">Designation: </td>
                                            <td className="right-column overHandle">Tech Team</td>
                                        </tr>
                                        <tr>
                                            <td className="left-column">Institute Name: </td>
                                            <td className="right-column overHandle">IIT</td>
                                        </tr>
                                        <tr>
                                            <td className="left-column">Phone Number: </td>
                                            <td className="right-column overHandle">	6205144592</td>
                                        </tr>
                                        <tr>
                                            <td className="left-column"></td>
                                            <td className="right-column overHandle"></td>
                                        </tr>
                                        <tr className="mine_proDbs">
                                            <td><button href="#" className="register-now" data-toggle="modal" data-target="#change_username" style={{marginRight: '0'}}>Change&nbsp;Username</button></td>
                                            <td><button href="#" className="register-now" data-toggle="modal" data-target="#change_password" style={{backgroundColor: 'red',border: '1px solid red'}}>Delete&nbsp;Profile</button></td>
                                        </tr>
                                    </table>
                                    </h2>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

  )
}

export default Profile
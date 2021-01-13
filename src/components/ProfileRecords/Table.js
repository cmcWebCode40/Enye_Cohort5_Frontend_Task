import React, { useState } from 'react'
import '../../styles/profiles.css'
import EmptyList from '../emptyList/EmptyList'
import Modal from '../modal/Modal'
import Details from './Details'

const Table = ({ data , allUsers,setRefetch,refetch }) => {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState('')

  console.log(allUsers);

  const openUserDetails = (data) => {
    setUser(data);
    setOpen(!open)
  }
  return (
    <div>
      
      <Modal open={open} setOpen={setOpen}>
        <Details data={user} />
      </Modal>
      {
        data.length ?
          <>
            <h3 id="table-head" className="table-head">({(allUsers?.records?.profiles.length)})   User Profile</h3>
            <table id="magic-table" class="magic-table">
              <thead >
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">UserName</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Email</th>
                  <th scope="col">Payment Method</th>
                  <th scope="col">Credit Card Type</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((list) => (
                  <tr>
                    <td>{list.FirstName}</td>
                    <td>{list.LastName}</td>
                    <td>{list.UserName}</td>
                    <td>{list.Gender}</td>
                    <td>{list.Email}</td>
                    <td>{list.PaymentMethod}</td>
                    <td>{list.CreditCardType}</td>
                    <td><span onClick={() => openUserDetails(list)} className="table-btn">Details</span></td>
                  </tr>
                ))}
              </tbody>
            </table> </> :
             <EmptyList 
             refetch={refetch}
             setRefetch={setRefetch}/>
             }

    </div>
  )
}

Table.defaultProps ={
  data:[]
}

export default Table

import React from 'react'

const ProfileRecords = ({data}) => {
  return (
    <div style={{margin:'2rem'}}>
      {
      data.length ?
      <div>
        {data.map((list)=> (
        <div key={list.Email} style={{margin:'2rem',padding:'2rem'}}>
          <span>{list.CreditCardNumber}</span>
          <span>{list.CreditCardType}</span>
          <span>{list.DomainName}</span>
          <span>{list.Email}</span>
          <span>{list.PhoneNumber}</span>
          <span><strong>{list.Gender}</strong></span>
        </div>
        ))}
      </div>
      :
      <p>Nothig</p>
      }
    </div>
  )
}

ProfileRecords.defaultProps ={
  data:[]
}

export default ProfileRecords

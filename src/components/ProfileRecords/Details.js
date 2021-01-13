import React from 'react'

const Details = ({ data }) => {
  return (
    <div class="user-wrapper">
      <ul class="user-list">
        <li >
          <div class="content">
            <i class="las la-mask"></i>
            <div>
              <h1><i class="fas fa-user"></i> First Name</h1>
              <h2>{data.FirstName}</h2>
            </div>
          </div>
        </li>
        <li class="active">
          <div class="content">
            <i class="las la-dove"></i>
            <div>
              <h1> <i class="fas fa-user"></i>Last Name</h1>
              <h2>{data.LastName}</h2>
            </div>
          </div>
        </li>
        <li>
          <div class="content">
            <i class="las la-otter"></i>
            <div>
              <h1> <i class="fas fa-user"></i>User Name</h1>
              <h2>{data.UserName}</h2>
            </div>
          </div>
        </li>
        <li>
          <div class="content">
            <i class="las la-spider"></i>
            <div>
              <h1>Gender </h1>
              <h2>{data.Gender}</h2>
            </div>
          </div>
        </li>
        <li>
          <div class="content">
            <i class="las la-dragon"></i>
            <div>
              <h1><i class="fas fa-envelope-open-text"></i> Email</h1>
              <h2>{data.Email}</h2>
            </div>
          </div>
        </li>
        <li>
          <div class="content">
            <i class="las la-dragon"></i>
            <div>
              <h1> <i class="fas fa-phone-square-alt"></i> Phone Number</h1>
              <h2>{data.PhoneNumber}</h2>
            </div>
          </div>
        </li>
        <li>
          <div class="content">
            <i class="las la-dragon"></i>
            <div>
              <h1><i class="fas fa-browser"></i> Domain Name</h1>
              <h2>{data.DomainName}</h2>
            </div>
          </div>
        </li>
        <li>
          <div class="content">
            <i class="las la-dragon"></i>
            <div>
              <h1><i class="fas fa-sign-in-alt"></i> Last Login</h1>
              <h2>{data.LastLogin}</h2>
            </div>
          </div>
        </li>
        <li>
          <div class="content">
            <i class="las la-dragon"></i>
            <div>
              <h1><i class="fas fa-map-marker-alt"></i> Mac Address</h1>
              <h2>{data.MacAddress}</h2>
            </div>
          </div>
        </li>
        <li>
          <div class="content">
            <i class="las la-dragon"></i>
            <div>
              <h1><i class="far fa-credit-card"></i> Credit Card Number</h1>
              <h2>{data.CreditCardNumber}</h2>
            </div>
          </div>
        </li>
        <li>
          <div class="content">
            <i class="las la-dragon"></i>
            <div>
              <h1>Credit Card Type</h1>
              <h2>{data.CreditCardType}</h2>
            </div>
          </div>
        </li>
        <li>
          <div class="content">
            <i class="las la-dragon"></i>
            <div>
              <h1> <i class="fas fa-money-check"></i> Payment Method</h1>
              <h2>{data.PaymentMethod}</h2>
            </div>
          </div>
        </li>
        <li>
          <div class="content">
            <i class="las la-dragon"></i>
            <div>
              <h1><i class="fas fa-link"></i> Url </h1>
              <h2>{data.Url}</h2>
            </div>
          </div>
        </li>

        <li>
          <div class="content">
            <i class="las la-dragon"></i>
            <div>
              <h1> <i class="fas fa-compass"></i> Longitude </h1>
              <h2>{data.Longitude}</h2>
            </div>
          </div>
        </li>
        <li>
          <div class="content">
            <i class="las la-dragon"></i>
            <div>
              <h1><i class="fas fa-compass"></i> Latitude </h1>
              <h2>{data.Latitude}</h2>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Details

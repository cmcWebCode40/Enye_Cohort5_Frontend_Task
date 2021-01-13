import React from 'react'
import { gender, paymentMethod } from '../../utils/searchTypes'
import SearchBar from './SearchBar'
import '../../styles/filter.css'

const Filter = ({ data, dispatch ,setCurrentPage}) => {

  return (
    <div className="">
      <SearchBar
        data={data}
        dispatch={dispatch}
        setCurrentPage={setCurrentPage}
      />
      <div className="filter-content">
        <div className="selectbox">
          <label htmlFor="gender-id">Gender
        <select name="slct" id="gender-id" onChange={(e) => {
              dispatch({
                type: 'GENDER',
                payload: {
                  data,
                  value: e.target.value
                }
              })
              setCurrentPage(1)
            }}>
              <option value="">All</option>
              {gender.map(list => (
                <option value={list}>{list}</option>
              ))}
            </select> <br /></label>

        </div>
        <div className="selectbox">
          <label htmlFor="paymentType-id">Payment Type
        <select name="slct" id="paymentType-id" onChange={(e) => {
              dispatch({
                type: 'PAYMENT_TYPE',
                payload: {
                  data,
                  value: e.target.value
                }
              })
              setCurrentPage(1)
            }}>
              <option value="">All</option>
              {paymentMethod.map(list => (
                <option value={list}>{list}</option>
              ))}
            </select> <br /></label>

        </div>
      </div>
    </div>

  )
}

export default Filter

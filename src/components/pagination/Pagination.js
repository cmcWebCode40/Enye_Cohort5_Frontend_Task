import React from 'react';
import '../../styles/pagination.css'

const Pagination = ({ totalRecords, postPerPage, paginate }) => {

  const pageNumbers = []

  for (let index = 1; index <= Math.ceil(totalRecords / postPerPage); index++) {
    pageNumbers.push(index)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <a href="#filter" onClick={() => paginate(number)}>
            <li>{number}</li></a>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination

import React from 'react'

const EmptyList = ({ setRefetch, refetch }) => {
  return (
    <div class="empty_state">
      <i class="far fa-sad-tear"></i>
      <h3 class="">No User Found</h3>
      <p>Unable to fetch user data at this time : Network Error</p>
      <button onClick={() => setRefetch(!refetch)}>Try Again</button>
    </div>
  )
}

export default EmptyList

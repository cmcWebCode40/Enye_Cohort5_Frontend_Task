import React, { useEffect, useMemo, useReducer, useState } from 'react'
import Filter from '../components/filter/Filter'
import Loading from '../components/loading/Loading'
import Pagination from '../components/pagination/Pagination'
import Table from '../components/ProfileRecords/Table'
import useFetch from '../hook/useFetch'
import { filterReducer } from '../utils/filterReducer'


const apiUrl = 'https://api.enye.tech/v1/challenge/records'

const Home = () => {
  const { data, loading,setRefetch,refetch } = useFetch(apiUrl)
  const [userProfile, dispatch] = useReducer(filterReducer, [])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPost, setCurrentPost] = useState(1)
  const [postPerPage] = useState(20)

  const paginate = (number) => setCurrentPage(number)

  useMemo(() => {
    if (userProfile?.records) {
      const indexOfLastPost = currentPage * postPerPage;
      const indexOfFirstPost = indexOfLastPost - postPerPage
      setCurrentPost(() => (userProfile?.records?.profiles.slice(indexOfFirstPost, indexOfLastPost)))
    }
  }, [currentPage, postPerPage, userProfile])


  useEffect(() => {
    if (data?.records) {
      dispatch({
        type: 'GET_ALL',
        payload: data
      })
    }
  }, [data])

  return (
    <div>
      <header>
        <h1>Enye Frontend Task <i class="fab fa-accessible-icon"></i></h1>
      </header>
      <main >
        <div id="filter" className="filter">
          {userProfile?.records &&  
           <Filter
            data={data}
            dispatch={dispatch}
            setCurrentPage={setCurrentPage}
          />
          }
        </div>
        {loading ? <Loading /> : <>
          <Table
          setRefetch={setRefetch}
          refetch={refetch}
            allUsers={userProfile}
            data={currentPost}
          />
          <Pagination
            paginate={paginate}
            postPerPage={postPerPage}
            totalRecords={userProfile?.size}
          />
        </>}

      </main>

    </div>
  )
}

export default Home

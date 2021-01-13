import {
  useEffect,
  useState
} from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [refetch, setRefetch] = useState(true)


  useEffect(() => {

    const getRecords = async () => {
      setLoading(true)
      try {
        const res = await fetch(url)
        const data = await res.json()
        setData(data)
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }
    getRecords()

  }, [url,refetch])


  return {
    data,
    error,
    refetch,
    setRefetch,
    loading
  }
}

export default useFetch
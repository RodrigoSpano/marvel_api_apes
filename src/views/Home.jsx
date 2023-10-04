import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getAllComics } from "../redux/features/comics/comicsActions"
import ComicsContainer from "../components/comics/ComicsContainer"
import './home.scss'

const Home = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllComics())
  }, [])

  return (
    <div className="home">
      <ComicsContainer />
    </div>
  )
}

export default Home
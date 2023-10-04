import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllComics } from "../redux/features/comics/comicsActions"
import ComicsContainer from "../components/comics/ComicsContainer"
import './home.scss'
import { Spinner } from "react-bootstrap"

const Home = () => {

  const state = useSelector(state => state.comics)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllComics())
  }, [])

  return (
    <div className="home">
      {
        !state.allComics.length ? <Spinner className="spinner" animation="border" /> :
        <ComicsContainer />
      }
    </div>
  )
}

export default Home
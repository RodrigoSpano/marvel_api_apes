import { useEffect } from 'react'
import './detailPage.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getComicById } from '../redux/features/comics/comicsSlice'
import DetailContainer from '../components/comicDetail/DetailContainer'

const ComicDetail = () => {

  const {id} = useParams()
  const dispatch = useDispatch()
  const {comicDetail} = useSelector((state) => state.comics)


  useEffect(() => {
    dispatch(getComicById(id))
  },[])

  return (
    <div className='detail_page'>
      {
        comicDetail ? <DetailContainer/>: null
      }
    </div>
  )
}

export default ComicDetail
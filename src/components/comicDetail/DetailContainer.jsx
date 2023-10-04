import { useSelector } from 'react-redux'
import DetailBody from './sub-comps/DetailBody'
import './detail.scss'

const DetailContainer = () => {
  const {comicDetail} = useSelector(state => state.comics)
  return (
    <div className='detail_container'>
      {
        (comicDetail && comicDetail.images) ? 
        <img src={comicDetail.images[0].path } alt="comic cover" />
        :null
      }
        <DetailBody />
    </div>
  )
}

export default DetailContainer
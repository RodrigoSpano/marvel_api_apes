import { useState } from "react"
import { useSelector } from "react-redux"
import Readmore from "./Readmore"
import CharsAndCreators from "./CharsAndCreators"


const DetailBody = () => {
  const [more, setMore] = useState(false)
  const {comicDetail} = useSelector(state => state.comics)

  const handleReadMore = () => {
    setMore(prev => !prev)
  }

  return (
    <div className="detail_body">
      <h2>#{comicDetail.id} - {comicDetail.title}</h2>
      {
        comicDetail.description ?
        <Readmore handleReadMore={handleReadMore} state={more} text={comicDetail.description} />
        : null
      }
    {
      (comicDetail && comicDetail.characters || comicDetail.creators) ? <CharsAndCreators /> : null
    }
    </div>
  )
}

export default DetailBody
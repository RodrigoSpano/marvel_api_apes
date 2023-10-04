/* eslint-disable react/prop-types */
import CardBody from "./CardBody"
import './comic.scss'


const ComicCard = ({data}) => {
  
  return (
    <div className="comic">
      <img alt="comic photo" src={data.images[0]?.path ? data.images[0]?.path :  '/assets/confidential.png'} />
      <CardBody body={data} />
    </div>
  )
}

export default ComicCard
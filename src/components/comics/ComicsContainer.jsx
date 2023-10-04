import ComicCard from "./sub-comps/card/ComicCard"
import './container.scss'
import useComicsHook from "../customsHooks/useComicsHook"
import PaginationComponent from "./sub-comps/pagination/PaginationComponent"
import Searchbar from "./sub-comps/searchbar/Searchbar"
import OrderByName from "../filterComponent/OrderByName"

const ComicsContainer = () => {
  const {comics, handleNext, handlePrev, page, pageCount} = useComicsHook()

  return (
    <div className="comics_container">
      <div className="filters">
        <Searchbar />
        <OrderByName />
      </div>
      <div className="comics_grid">
        {
          comics.length ? 
            comics.map(c => <ComicCard key={c.id} data={c} />)
            : null
        }
      </div>
      <PaginationComponent handleNext={handleNext} handlePrev={handlePrev} page={page} pageCount={pageCount} />
    </div>
  )
}

export default ComicsContainer
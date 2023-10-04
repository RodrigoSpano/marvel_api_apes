import ComicCard from "./sub-comps/card/ComicCard"
import './container.scss'
import useComicsHook from "../customsHooks/useComicsHook"
import PaginationComponent from "./sub-comps/pagination/PaginationComponent"

const ComicsContainer = () => {
  const {comics, handleNext, handlePrev, page, pageCount} = useComicsHook()

  return (
    <div className="comics_container">
      {
        comics.length ? 
          comics.map(c => <ComicCard key={c.id} data={c} />)
          : null
      }
      <PaginationComponent handleNext={handleNext} handlePrev={handlePrev} page={page} pageCount={pageCount} />

    </div>
  )
}

export default ComicsContainer
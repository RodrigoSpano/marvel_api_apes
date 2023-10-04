import { useState } from "react"
import { useSelector } from "react-redux"

const useComicsHook = () => {
  const state = useSelector((state) =>state.comics)
  const pageCount = Math.ceil(state.allComics.length/12)
  const [page, setPage] = useState(1)
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(12)
  let comics = state.allComics.slice(prev, next)

  const handleNext = () => {
    if(page < pageCount){
      setPage(prev => prev+1)
      setPrev(prev => prev+12)
      setNext(prev => prev+12)
    }
    comics = state.allComics.slice(prev, next)
  }
  
  const handlePrev = () => {
    if(page > 1) {
      setPage(prev => prev-1)
      setPrev(prev => prev-12)
      setNext(prev => prev-12)
    }
    comics = state.allComics.slice(prev, next)
  }

  return {comics, handleNext, handlePrev, page, pageCount}
}

export default useComicsHook
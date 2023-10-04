/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import './searchbar.scss'
import {FiSearch} from 'react-icons/fi'
import { searchComic } from '../../../../redux/features/comics/comicsSlice'

const Searchbar = () => {

  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(searchComic(e.target.value))
  }

  return (
    <div className='searchbar'>
      <input onChange={handleChange} placeholder='Search comics...' />
      <FiSearch />
    </div>
  )
}

export default Searchbar
/* eslint-disable react/prop-types */
import './pagination.scss'
import {PiArrowFatLinesLeftFill, PiArrowFatLinesRightFill} from 'react-icons/pi'

const PaginationComponent = ({handleNext, handlePrev, page, pageCount}) => {
  return (
    <div className='pagination'>
      <span className='btn' onClick={handlePrev}>
       <PiArrowFatLinesLeftFill />
      </span>

      <span className='pages'>{page} from {pageCount}</span>

      <span className='btn' onClick={handleNext}>
        <PiArrowFatLinesRightFill />
      </span>
    </div>
  )
}

export default PaginationComponent
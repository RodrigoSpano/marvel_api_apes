/* eslint-disable react/prop-types */

const Readmore = ({text, state, handleReadMore}) => {
  return (
      <p className="readmore">{!state ? (`${text.slice(0,120)}...`) : text}
        <span onClick={handleReadMore}>{!state ? 'Read more...' : 'Read less...'}</span>
      </p>
  )
}

export default Readmore
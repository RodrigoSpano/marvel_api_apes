import { Accordion } from "react-bootstrap"
import { useSelector } from "react-redux"

const CharsAndCreators = () => {

  const {comicDetail} = useSelector(state => state.comics)

  return (
    <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Creators</Accordion.Header>
      <Accordion.Body className="accordion">
        <div className="creators_acc">
          {
            comicDetail && comicDetail.creators.length ? 
              comicDetail.creators.map(cre => <li key={cre.name}>{cre.name} - {cre.role}</li>)
            : 'No creators provided'
          }
        </div>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Characters</Accordion.Header>
      <Accordion.Body>
      <div className="characters_acc">
          {
            comicDetail && comicDetail.characters.length ? 
              comicDetail.characters.map(char => <li key={char.name}>{char.name}</li>)
            : 'No creators provided'
          }
        </div>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}

export default CharsAndCreators
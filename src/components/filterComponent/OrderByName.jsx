import { Dropdown, DropdownButton } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { orderByName } from "../../redux/features/comics/comicsSlice"

const OrderByName = () => {

  const dispatch = useDispatch()

  const handleChange = (type) => {
    dispatch(orderByName(type))
  }

  return (
    <DropdownButton className="select" id="dropdown-basic-button" title="Order by" >
      <Dropdown.Item onClick={() => handleChange('A-Z')} >A-Z</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange('Z-A')}>Z-A</Dropdown.Item>
    </DropdownButton>
  )
}

export default OrderByName
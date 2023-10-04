import { useNavigate } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
      <img onClick={() => navigate('/')} alt='marvel logo' src='/assets/marvel-logo.png' />
    </div>
  )
}

export default Navbar
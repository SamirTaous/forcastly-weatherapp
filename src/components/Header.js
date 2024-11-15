import Button from './Button'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className="header">
        <div className='logo-box'><img className='logo' src='./forcastly.png'></img></div>
        <SearchBar/>
    </div>
  )
}

export default Header
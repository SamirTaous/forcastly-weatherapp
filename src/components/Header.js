import Button from './Button'
import SearchBar from './SearchBar'

const Header = ({onSet}) => {
  return (
    <div className="header">
        <div className='logo-box'><img className='logo' src='./forcastly.png'></img></div>
        <SearchBar onSet={onSet}/>
    </div>
  )
}

export default Header
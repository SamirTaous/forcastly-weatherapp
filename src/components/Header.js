import Button from './Button'
import SearchBar from './SearchBar'

const Header = ({onSubmit}) => {
  return (
    <div className="header">
        <div className='logo-box'><img className='logo' src='./forcastly.png'></img></div>
        <SearchBar onSubmit={onSubmit}/>
    </div>
  )
}

export default Header
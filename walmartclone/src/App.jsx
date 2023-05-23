import './App.css'

function App() {

  return (
    <>
    <header>
      <div className='nav'>
      <div className='nav-left'>
        <div className='nav-item'>logo</div>
        <div className='nav-item'>Departments</div>
        <div className='nav-item'>Services</div>
      </div>
      <div className='search'>
        <form>
          <div className='nav-input'>
          <input placeholder='Search everything at Walmart online and in store'/>
        </div>
        </form>
      </div>
      <div className='nav'>
    <div className='nav-item'>Reorder</div>
    <div className='nav-item'>sign in</div>
    <div className='nav-item'>Cart</div>
      </div>
      </div>
      <nav className='nav-belt'>
        <div>How do you want your items?</div>
        <div>location</div>
        <div>
          <ul className='category-list'>
            <li className='category-list-item'>
              <a href=''>Deals</a>
            </li>
            <li className='category-list-item'>
              <a href=''>Graduation</a>
            </li> <li className='category-list-item'>
              <a href=''>National Pet Month</a>
            </li> <li className='category-list-item'>
              <a href=''>Grocery & essentials</a>
            </li> <li className='category-list-item'>
              <a href=''>Fashion</a>
            </li>
            <li className='category-list-item'>
              <a href=''>Home</a>
            </li> <li className='category-list-item'>
              <a href=''>Toys</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  )
}

export default App

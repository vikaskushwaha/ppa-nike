import './App.css'
import { Navbar } from './component/navBar/nav'
import { ProductContainer } from './component/itemList/allItem'

function App() {
  return (
    <div className='main-container'>
      <div className='body'>
        <Navbar />
        <ProductContainer />
      </div>

    </div>

  )
}

export default App

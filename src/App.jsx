import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'

function App() {


  return (
    <div className=''>
      <Topbar />
      <div className=" Container flex mt-[14px]">
        <Sidebar />
        <Home />
      </div>
    </div>

  )
}

export default App

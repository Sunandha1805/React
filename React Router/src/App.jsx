import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { Outlet } from 'react-router' 

function App() {


  return (
    <div>
     <Header />
     <Outlet />
     <Footer />
    </div>

  )
}

export default App

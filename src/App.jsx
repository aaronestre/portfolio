import RouterSwitcher from "./components/RouterSwitcher"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import "./styles/global.css"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <RouterSwitcher />
      <Footer/>
    </div>
  )
}

export default App

import { Routes,Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Oversized } from "./Pages/Oversized"
import { Headersite } from "./Components/Headersite"


function App() {


  return (
    <>
      <div  className="  "> 
          <Headersite/>

          

          <hr/>

          <div className="py-4">
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Oversized" element={<Oversized/>}></Route>
            </Routes>
          </div>

          
      </div>
    </>
  )
}

export default App

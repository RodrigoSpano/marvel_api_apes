import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./views/Home"
import ComicDetail from "./views/ComicDetail"

function App() {

  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/comic/:id" element={<ComicDetail />} />
   </Routes>
  )
}

export default App

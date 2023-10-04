import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./views/Home"
import ComicDetail from "./views/ComicDetail"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic/:id" element={<ComicDetail />} />
      </Routes>
    </div>
  )
}

export default App

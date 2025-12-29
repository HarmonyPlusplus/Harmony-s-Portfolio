import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Works from './Pages/Works'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'
import Layout from "./Layout/MainLayout"

const App = () => {
  return (
    <div>

      <Router>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>


    </div>
  )
}

export default App

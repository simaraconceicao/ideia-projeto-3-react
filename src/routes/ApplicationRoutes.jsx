import { Routes, Route, BrowserRouter } from 'react-router-dom'

import About from '../pages/About/About'
import Projects from '../pages/Projects/Projects'
import List from '../pages/List/List'

import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'

function ApplicationRoutes() {
  return(
    <BrowserRouter>
     <Menu/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="comentarios" element={<List />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}

export default ApplicationRoutes
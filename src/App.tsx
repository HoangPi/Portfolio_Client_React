import './App.css'
import { NavBar } from './components/navBar'
import { AboutMe } from './sections/aboutMe'
import { Tech } from './sections/technologies'
import { WebDemo } from './sections/webDemo'

function App() {

  return (<div className='font-sans text-gray-200'>
      <NavBar/>
      <AboutMe/>
      <Tech/>
      <WebDemo/>
    </div>
  )
}

export default App

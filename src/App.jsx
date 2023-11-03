
import './App.css'
import { Header } from './Header'
import { Body } from './body/Body'


function App() {
 return <div id='app' className=' min-h-screen relative min-w-screen'>
          <div className="absolute bg-primary w-96 h-72 rounded-full blur-[150px] top-0 left-0"></div>
  <div className='container px-2 lg:px-20 mx-auto relative' >
    <div className='h-5'></div>
    <Header />
    <Body />
  </div>
  </div>
}

export default App
